// Client-side validation + submit flow for the contact form.
// Networking lives in src/lib/contact-submit.ts; this file only handles UI state.
import { submitContact, type ContactData } from '../lib/contact-submit';

const form = document.querySelector<HTMLFormElement>('[data-contact-form]');

if (form) {
  form.noValidate = true; // we render our own accessible messages

  const status = form.querySelector<HTMLElement>('[data-status]')!;
  const submitBtn = form.querySelector<HTMLButtonElement>('[data-submit]')!;
  const submitLabel = form.querySelector<HTMLElement>('[data-submit-label]')!;

  type Rule = (value: string) => string | null;
  const rules: Record<string, Rule> = {
    nombre: (v) => (v.trim().length >= 2 ? null : 'Ingrese su nombre y apellido.'),
    correo: (v) => {
      if (!v.trim()) return 'Ingrese su correo electrónico para poder responderle.';
      return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim())
        ? null
        : 'Revise el correo: debe tener la forma nombre@empresa.com.py.';
    },
    telefono: (v) =>
      !v.trim() || /^[+\d][\d\s()-]{5,}$/.test(v.trim())
        ? null
        : 'Revise el teléfono: use solo números, espacios, + o guiones.',
    mensaje: (v) =>
      v.trim().length >= 10 ? null : 'Cuéntenos brevemente su consulta (al menos 10 caracteres).',
  };

  const fieldFor = (name: string) =>
    form.elements.namedItem(name) as HTMLInputElement | HTMLTextAreaElement | null;

  const showError = (name: string, message: string | null) => {
    const field = fieldFor(name);
    const error = document.getElementById(`${field?.id}-error`);
    if (!field || !error) return;
    field.setAttribute('aria-invalid', String(Boolean(message)));
    error.hidden = !message;
    error.textContent = message ?? '';
  };

  const validateField = (name: string) => {
    const field = fieldFor(name);
    const message = field ? rules[name](field.value) : null;
    showError(name, message);
    return !message;
  };

  // Validate on blur; once a field has shown an error, re-check it as the user types.
  for (const name of Object.keys(rules)) {
    const field = fieldFor(name);
    field?.addEventListener('blur', () => {
      if (field.value.trim() || field.getAttribute('aria-invalid') === 'true') validateField(name);
    });
    field?.addEventListener('input', () => {
      if (field.getAttribute('aria-invalid') === 'true') validateField(name);
    });
  }

  const readData = (): ContactData => {
    const fd = new FormData(form);
    const get = (k: string) => String(fd.get(k) ?? '').trim();
    return {
      nombre: get('nombre'),
      empresa: get('empresa'),
      correo: get('correo'),
      telefono: get('telefono'),
      operacion: get('operacion'),
      mensaje: get('mensaje'),
    };
  };

  const composeText = (d: ContactData) =>
    [
      `Hola, soy ${d.nombre}${d.empresa ? ` (${d.empresa})` : ''}.`,
      d.operacion ? `Consulta sobre: ${d.operacion}.` : '',
      '',
      d.mensaje,
      '',
      `Correo: ${d.correo}${d.telefono ? ` · Teléfono: ${d.telefono}` : ''}`,
    ]
      .filter((line, i, arr) => line !== '' || arr[i - 1] !== '')
      .join('\n');

  const setStatus = (html: string, kind: 'info' | 'error' = 'info') => {
    status.innerHTML = html;
    status.classList.toggle('is-error', kind === 'error');
    status.hidden = false;
  };

  const escapeHtml = (s: string) =>
    s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    status.hidden = true;

    const invalid = Object.keys(rules).filter((name) => !validateField(name));
    if (invalid.length) {
      fieldFor(invalid[0])?.focus();
      return;
    }

    const honeypot = form.elements.namedItem('sitio_web') as HTMLInputElement | null;
    if (honeypot?.value) return;

    const data = readData();
    submitBtn.setAttribute('aria-busy', 'true');
    submitBtn.disabled = true;
    submitLabel.textContent = 'Enviando…';

    try {
      const result = await submitContact(data);

      if (result.status === 'sent') {
        form.reset();
        setStatus(`<p><strong>Consulta enviada.</strong> Le responderemos a ${escapeHtml(data.correo)} a la brevedad.</p>`);
      } else if (result.status === 'not-configured') {
        const text = composeText(data);
        const wa = `https://wa.me/${form.dataset.whatsapp}?text=${encodeURIComponent(text)}`;
        const mail = `mailto:${form.dataset.email}?subject=${encodeURIComponent('Consulta desde el sitio web')}&body=${encodeURIComponent(text)}`;
        setStatus(
          `<p><strong>Su consulta está lista para enviar.</strong> Elija por dónde prefiere mandarla; el mensaje ya va completo.</p>
           <p class="form__status-links">
             <a href="${wa}" target="_blank" rel="noopener">Enviar por WhatsApp<span class="visually-hidden"> (nueva pestaña)</span></a>
             <a href="${mail}">Enviar por correo</a>
           </p>`,
        );
      } else {
        throw new Error('submit failed');
      }
    } catch {
      setStatus(
        `<p><strong>No se pudo enviar la consulta.</strong> Revise su conexión e intente de nuevo, o escríbanos a <a href="mailto:${form.dataset.email}">${form.dataset.email}</a>.</p>`,
        'error',
      );
    } finally {
      submitBtn.removeAttribute('aria-busy');
      submitBtn.disabled = false;
      submitLabel.textContent = 'Enviar consulta';
    }
  });
}
