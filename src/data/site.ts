export const WHATSAPP_NUMBER = '595981221206';

export const waLink = (text: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

export const whatsappHref = waLink(
  'Hola, quisiera consultar sobre sus servicios de despacho aduanero.',
);

export const contact = {
  address: 'Benjamín Constant 962, Edif. Colón 1 – Asunción, Paraguay',
  addressShort: 'Benjamín Constant 962, Edif. Colón 1, Asunción',
  mapsHref: 'https://maps.google.com/?q=Benjam%C3%ADn+Constant+962,+Asunci%C3%B3n,+Paraguay',
  mapsEmbed:
    'https://www.google.com/maps?q=Benjam%C3%ADn+Constant+962,+Asunci%C3%B3n,+Paraguay&output=embed',
  phone: '(0981) 221-206',
  phoneHref: 'tel:+595981221206',
  email: 'mirtha@barretoyasociados.com.py',
};

export const navLinks = [
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Historia', href: '#historia' },
  { label: 'Equipo', href: '#equipo' },
  { label: 'Clientes', href: '#clientes' },
  { label: 'Contacto', href: '#contacto' },
];

export const aboutItems = [
  {
    title: 'Más de 40 años de experiencia',
    desc: 'Trayectoria consolidada en importación, exportación y maquila.',
  },
  {
    title: 'Asesoría integral',
    desc: 'Acompañamos cada operación con cumplimiento normativo y responsabilidad profesional.',
  },
  {
    title: 'Servicio personalizado',
    desc: 'Un trato cercano, eficiente y seguro en cada gestión.',
  },
];

export const valores = [
  'Actuamos con integridad, honestidad, ética y transparencia en todas nuestras operaciones.',
  'Cumplimos con las normativas vigentes priorizando la responsabilidad profesional.',
  'Construimos relaciones basadas en la confianza y el respeto.',
  'Acompañamos cada gestión con compromiso, seriedad y claridad.',
];

export const timeline = [
  {
    date: 'Inicios de 1980',
    desc: 'Primeros pasos de la agencia, con esfuerzo y dedicación, iniciando en un escritorio prestado.',
  },
  {
    date: '18 de enero de 1983',
    desc: 'Constitución oficial: su fundadora, Mirtha Barreto, obtiene la matrícula de Despachante de Aduanas.',
  },
  {
    date: 'Oficina propia',
    desc: 'La agencia alquila su primera oficina en Colón 1, entrepiso, Oficina 11.',
  },
  {
    date: 'Hoy',
    desc: 'Trayectoria consolidada con 43 años en el comercio exterior, basada en confianza, seriedad y compromiso.',
  },
];

export const team = [
  { name: 'Mirtha Barreto', role: 'CEO - Fundadora', initials: 'MB', icon: '/icons/board.png' },
  { name: 'Lic. Víctor Diez Pérez', role: 'CFO - Financiero', initials: 'VD', icon: '/icons/profit.png' },
  { name: 'Ing. Renato Barreto', role: 'COMEX', initials: 'RB', icon: '/icons/globe.png' },
  { name: 'Carlos Troxler', role: 'COMEX', initials: 'CT', icon: '/icons/package.png' },
  { name: 'David Ozuna', role: 'COMEX Maquila', initials: 'DO', icon: '/icons/manufacture.png' },
  { name: 'Lic. Rocío Rodríguez', role: 'R.R.H.H.', initials: 'RR', icon: '/icons/human-resources.png' },
];

export const clients = [
  { name: 'ENVACO S.A.', rubro: 'Importación y exportación de papel y cartón corrugado', years: 31 },
  { name: 'Industrias Gráficas Nobel S.A.', rubro: 'Importación de productos para gráfica', years: 31 },
  { name: 'La Iglesia de Jesucristo de los Santos de los Últimos Días', rubro: 'Importaciones por Ley 302/93 y exportaciones varias', years: 37 },
  { name: 'Asociación de Mejoramiento Mutuo', rubro: 'Importación y exportaciones; maquila de prendas de vestir', years: 30 },
  { name: 'Preferida S.A.C.I.', rubro: 'Empresa maquiladora de prendas de vestir', years: 7 },
  { name: 'Láminas Internacionales S.A.', rubro: 'Empresa maquiladora de madera multilaminada', years: 11 },
  { name: 'Ferretería Industrial S.A.E.', rubro: 'Importadora de maquinarias agrícolas y productos de ferretería', years: 2 },
  { name: 'Hornimac S.R.L.', rubro: 'Congeladoras, estanterías metálicas', years: 27 },
  { name: 'Altona Woods', rubro: 'Exportador de madera', years: 2 },
  { name: 'Centro Familiar de Adoración', rubro: 'Importación por Ley 302/93 (mercaderías varias)', years: 17 },
  { name: 'Copipunto S.A.', rubro: 'Productos y equipos para imprenta', years: 14 },
  { name: 'Casa Otto Import – Export S.R.L.', rubro: 'Empresa importadora de granos', years: 12 },
  { name: 'Harz S.R.L.', rubro: 'Empresa maquiladora de resinas PVC y estabilizantes', years: 2 },
  { name: 'Salinas Textil', rubro: 'Empresa maquiladora de mantas y alfombras', years: 6 },
  { name: 'Amambay Preformas S.A.', rubro: 'Empresa maquiladora de preformas de envases', years: 6 },
  { name: 'Saron International S.A.', rubro: 'Maquiladores de textil', years: 8 },
];

export const stats = [
  { value: 'Desde 1983', label: 'Constituidos oficialmente' },
  { value: '43 años', label: 'De trayectoria' },
  { value: String(clients.length), label: 'Clientes destacados' },
  { value: `${Math.max(...clients.map((c) => c.years))} años`, label: 'Máxima alianza vigente' },
];
