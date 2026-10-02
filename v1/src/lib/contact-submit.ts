// ─────────────────────────────────────────────────────────────────────────────
// Contact form submission — THE ONLY FILE TO CHANGE when wiring a real backend.
//
// The form UI (src/components/sections/Contact.astro) and its validation
// (src/scripts/contact-form.ts) call `submitContact(data)` and react to the
// returned result. To go live, replace the body of `submitContact` with e.g.:
//
//   const res = await fetch('/api/contact', {            // Cloudflare Pages Function
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(data),
//   });
//   return res.ok ? { status: 'sent' } : { status: 'error' };
//
// or point it at a form service (Formspree, Web3Forms, …) the same way.
// ─────────────────────────────────────────────────────────────────────────────

export interface ContactData {
  nombre: string;
  empresa: string;
  correo: string;
  telefono: string;
  operacion: string;
  mensaje: string;
}

export type SubmitResult =
  | { status: 'sent' }
  | { status: 'error' }
  | { status: 'not-configured' };

export async function submitContact(_data: ContactData): Promise<SubmitResult> {
  // No backend yet: the UI offers WhatsApp / e-mail with the message pre-filled instead.
  return { status: 'not-configured' };
}
