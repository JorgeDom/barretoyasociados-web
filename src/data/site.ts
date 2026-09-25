// All page copy and business data lives here. Components only render it.
// Source: barreto-y-asociados-info.md (items marked [CONFIRM] there still need client sign-off).

export const company = {
  shortName: 'Barreto y Asociados',
  legalName: 'Barreto T y Asociados S.A.',
  descriptor: 'Agencia de Despachos Aduaneros',
  founder: 'Mirtha Barreto',
  foundingDate: '1983-01-18',
  foundingYear: 1983,
  years: 43,
  url: 'https://barretoyasociados.com.py',
};

export const contact = {
  phoneDisplay: '0981 221-206',
  phoneHref: 'tel:+595981221206',
  whatsappNumber: '595981221206',
  email: 'mirtha@barretoyasociados.com.py',
  addressLine1: 'Benjamín Constant 962, Edif. Colón 1',
  addressLine2: 'Asunción, Paraguay',
  mapsLink:
    'https://www.google.com/maps/search/?api=1&query=Benjam%C3%ADn+Constant+962%2C+Asunci%C3%B3n%2C+Paraguay',
  mapsEmbed:
    'https://www.google.com/maps?q=Benjam%C3%ADn+Constant+962,+Asunci%C3%B3n,+Paraguay&z=17&output=embed',
};

export const whatsappLink = (text = 'Hola, quisiera consultar sobre un despacho aduanero.') =>
  `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(text)}`;

export const nav = [
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#historia', label: 'Historia' },
  { href: '#equipo', label: 'Equipo' },
  { href: '#clientes', label: 'Clientes' },
  { href: '#contacto', label: 'Contacto' },
];

export const about = {
  paragraphs: [
    'Somos una agencia de despacho de aduanas con más de 40 años de experiencia, dedicada a brindar asesoría integral en operaciones de importación, exportación, maquila y regímenes especiales.',
    'Acompañamos a cada cliente con un servicio personalizado, eficiente y seguro, basado en el cumplimiento normativo y la responsabilidad profesional.',
  ],
  stats: [
    { value: 43, suffix: '', label: 'años de trayectoria en comercio exterior' },
    { value: 1983, suffix: '', label: 'año de constitución, el 18 de enero', plain: true },
    { value: 16, suffix: '', label: 'clientes con alianzas de hasta 37 años' },
  ],
};

export const services = {
  intro:
    'A través de estos servicios, brindamos un acompañamiento integral en las operaciones de comercio exterior, asegurando el cumplimiento de la normativa vigente, la optimización de tiempos y costos, y una gestión eficiente orientada a proteger los intereses de nuestros clientes y facilitar el desarrollo de sus actividades.',
  items: [
    {
      title: 'Despacho de aduanas',
      detail: 'Importación y exportación.',
      icon: 'icon-despacho',
      tags: [],
    },
    {
      title: 'Asesoría en legislación y trámites aduaneros',
      detail: 'Orientación sobre la normativa vigente para cada operación.',
      icon: 'icon-asesoria',
      tags: [],
    },
    {
      title: 'Gestión ante instituciones públicas',
      detail: 'Trámites y permisos ante los organismos de control.',
      icon: 'icon-instituciones',
      tags: ['DINAVISA', 'INAN', 'SENACSA', 'CNIME'],
    },
    {
      title: 'Consultoría en incentivos fiscales',
      detail: 'Régimen de inversiones y beneficios fiscales.',
      icon: 'icon-incentivos',
      tags: ['Ley 60/90'],
    },
    {
      title: 'Procesos de maquila y regímenes especiales',
      detail: 'Acompañamiento en operaciones bajo regímenes especiales.',
      icon: 'icon-maquila',
      tags: [],
    },
  ],
};

export const differentiators = [
  {
    title: 'Atención personalizada',
    text: 'Priorizamos al cliente con un trato cercano y soluciones adaptadas a cada operación.',
    icon: 'icon-atencion',
  },
  {
    title: 'Rapidez y eficiencia',
    text: 'Respondemos con agilidad, resolviendo situaciones de forma inmediata y efectiva.',
    icon: 'icon-rapidez',
  },
  {
    title: 'Seguimiento permanente',
    text: 'Acompañamos cada gestión de manera constante, optimizando tiempos y costos.',
    icon: 'icon-seguimiento',
  },
  {
    title: 'Ética y transparencia',
    text: 'Actuamos con justicia, sinceridad y transparencia en todas nuestras operaciones.',
    icon: 'icon-etica',
  },
];

export const history = [
  {
    when: 'Inicios de los 80',
    title: 'Un escritorio prestado',
    text: 'La agencia nació a inicios de la década de 1980. Sus primeros pasos se dieron con esfuerzo y dedicación, desde un escritorio prestado.',
  },
  {
    when: '18 de enero de 1983',
    title: 'Constitución oficial',
    text: 'Mirtha Barreto obtuvo la matrícula de Despachante de Aduanas y la agencia se constituyó oficialmente.',
  },
  {
    when: 'Colón 1',
    title: 'La primera oficina propia',
    text: 'Una oficina alquilada en Colón 1, entrepiso, Oficina 11, con un propósito firme: atención personalizada a importadores y exportadores, cuidando sus intereses en cada operación.',
  },
  {
    when: 'Hoy',
    title: '43 años de trayectoria',
    text: 'Relaciones de confianza basadas en seriedad, experiencia y compromiso, respaldadas por 43 años en el comercio exterior.',
  },
];

export const mission =
  'Brindar productos y servicios de calidad, ofreciendo soluciones eficientes y personalizadas, basadas en la confianza, el compromiso y la excelencia, acompañando a nuestros clientes en el logro de sus objetivos mediante un trabajo profesional, transparente, orientado a resultados y enfocado en la mejora continua.';

export const vision =
  'Ser una empresa líder y referente consolidado en el sector, reconocida por la calidad de sus servicios, la atención personalizada y la confianza de sus clientes, manteniendo una organización moderna, capaz de adaptarse a los cambios del mercado y continuar creciendo de manera sólida y responsable, fortaleciendo permanentemente su reputación como un aliado confiable comprometido con la excelencia.';

export const values = [
  'Actuamos con integridad, honestidad, ética y transparencia en todas nuestras operaciones.',
  'Cumplimos con las normativas vigentes priorizando la responsabilidad profesional.',
  'Construimos relaciones basadas en la confianza y el respeto.',
  'Acompañamos cada gestión con compromiso, seriedad y claridad.',
];

export const teamIntro =
  'Nuestro equipo está integrado por profesionales con experiencia en comercio exterior y gestión aduanera, comprometidos con brindar un servicio eficiente y personalizado, acompañando cada operación con cercanía y conocimiento técnico.';

export const team = [
  { name: 'Mirtha Barreto', role: 'CEO · Fundadora', photo: 'team/mirtha-barreto.jpg' },
  { name: 'Lic. Víctor Diez Pérez', role: 'CFO · Finanzas', photo: 'team/victor-diez-perez.jpg' },
  { name: 'Ing. Renato Barreto', role: 'Comercio exterior', photo: 'team/renato-barreto.jpg' },
  { name: 'Carlos Troxler', role: 'Comercio exterior', photo: 'team/carlos-troxler.jpg' },
  { name: 'David Ozuna', role: 'Comercio exterior · Maquila', photo: 'team/david-ozuna.jpg' },
  { name: 'Lic. Rocío Rodríguez', role: 'Recursos humanos', photo: 'team/rocio-rodriguez.jpg' },
];

// Sorted by years of alliance (longest first) when rendered.
export const clients = [
  { name: 'ENVACO S.A.', sector: 'Importación y exportación de papel y cartón corrugado', years: 31 },
  { name: 'Industrias Gráficas Nobel S.A.', sector: 'Importación de productos para gráfica', years: 31 },
  { name: 'La Iglesia de Jesucristo de los Santos de los Últimos Días', sector: 'Importaciones por Ley 302/93 y exportaciones varias', years: 37 },
  { name: 'Asociación de Mejoramiento Mutuo', sector: 'Importación, exportación y maquila de prendas de vestir', years: 30 },
  { name: 'Preferida S.A.C.I.', sector: 'Maquila de prendas de vestir', years: 7 },
  { name: 'Láminas Internacionales S.A.', sector: 'Maquila de madera multilaminada', years: 11 },
  { name: 'Ferretería Industrial S.A.E.', sector: 'Maquinarias agrícolas y productos de ferretería', years: 2 },
  { name: 'Hornimac S.R.L.', sector: 'Congeladoras y estanterías metálicas', years: 27 },
  { name: 'Altona Woods', sector: 'Exportación de madera', years: 2 },
  { name: 'Centro Familiar de Adoración', sector: 'Importación por Ley 302/93 (mercaderías varias)', years: 17 },
  { name: 'Copipunto S.A.', sector: 'Productos y equipos para imprenta', years: 14 },
  { name: 'Casa Otto Import – Export S.R.L.', sector: 'Importación de granos', years: 12 },
  { name: 'Harz S.R.L.', sector: 'Maquila de resinas PVC y estabilizantes', years: 2 },
  { name: 'Salinas Textil', sector: 'Maquila de mantas y alfombras', years: 6 },
  { name: 'Amambay Preformas S.A.', sector: 'Maquila de preformas de envases', years: 6 },
  { name: 'Saron International S.A.', sector: 'Maquila textil', years: 8 },
];
