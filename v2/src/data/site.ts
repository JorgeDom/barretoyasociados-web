// All page copy and business data lives here. Components only render it.
// Source: barreto-y-asociados-info.md (items marked [CONFIRM] there still need client sign-off).

export const company = {
  shortName: 'Barreto y Asociados',
  legalName: 'Barreto T y Asociados S.A.',
  descriptor: 'Agencia de Despachos Aduaneros',
  founder: 'Mirtha Barreto',
  foundingDate: '1983-01-18',
  foundingYear: 1983,
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
  { href: '#rubros', label: 'Rubros' },
  { href: '#contacto', label: 'Contacto' },
];

export const about = {
  paragraphs: [
    'Somos una agencia de despacho de aduanas con {edad} años de experiencia, dedicada a brindar asesoría integral en operaciones de importación, exportación, maquila y regímenes especiales.',
    'Acompañamos a cada cliente con un servicio personalizado, eficiente y seguro, basado en el cumplimiento normativo y la responsabilidad profesional.',
  ],
  // Numbers are derived at render time (see About.astro): 'age' from company.foundingDate,
  // 'clients' from clientBase.count. Labels may use {edad} / {alianzaMax} tokens (YearsText.astro).
  stats: [
    { kind: 'age', label: 'años de trayectoria en comercio exterior' },
    { kind: 'founded', label: 'año de constitución, el 18 de enero' },
    { kind: 'clients', suffix: '+', label: 'clientes, con alianzas de hasta {alianzaMax} años' },
  ] as const,
};

// Client names and individual partnership years are not published (client's decision).
// Only these two aggregates appear on the page.
export const clientBase = {
  count: 36,
  oldestPartnershipSince: 1989, // first year of the longest partnership; drives {alianzaMax}
};

export const services = {
  intro:
    'A través de estos servicios, brindamos un acompañamiento integral en las operaciones de comercio exterior, asegurando el cumplimiento de la normativa vigente, la optimización de tiempos y costos, y una gestión eficiente orientada a proteger los intereses de nuestros clientes y facilitar el desarrollo de sus actividades.',
  items: [
    {
      title: 'Despacho de aduanas',
      detail: 'Importación y exportación.',
      image: 'services/despacho.jpg',
      alt: 'Buque portacontenedores navegando hacia el puerto',
      tags: [],
    },
    {
      title: 'Asesoría en legislación y trámites aduaneros',
      detail: 'Orientación sobre la normativa vigente para cada operación.',
      image: 'services/asesoria.jpg',
      alt: 'Profesional revisando formularios aduaneros sellados en un mostrador de atención',
      tags: [],
    },
    {
      title: 'Gestión ante instituciones públicas',
      detail: 'Trámites y permisos ante los organismos de control.',
      image: 'services/instituciones.jpg',
      alt: 'Vista aérea de la costanera de Asunción con las torres de oficinas del gobierno',
      tags: ['DINAVISA', 'INAN', 'SENACSA', 'CNIME'],
    },
    {
      title: 'Consultoría en incentivos fiscales',
      detail: 'Régimen de inversiones y beneficios fiscales.',
      image: 'services/incentivos.jpg',
      alt: 'Calculadora y planillas de análisis financiero',
      tags: ['Ley 60/90'],
    },
    {
      title: 'Procesos de maquila y regímenes especiales',
      detail: 'Acompañamiento en operaciones bajo regímenes especiales.',
      image: 'services/maquila.jpg',
      alt: 'Planta industrial con operarios en una línea de producción',
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
  {
    title: 'Financiación',
    text: 'Ofrecemos financiación con póliza de cumplimiento de contrato.',
    icon: 'icon-financiacion',
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
    title: '{edad} años de trayectoria',
    text: 'Relaciones de confianza basadas en seriedad, experiencia y compromiso, respaldadas por {edad} años en el comercio exterior.',
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

// Group photo above the directory. Until /public/images/equipo.jpg exists, a placeholder shows (ASSETS.md).
export const teamPhoto = {
  file: 'equipo.jpg',
  alt: 'El equipo de Barreto y Asociados',
};

// Directory grouped by area (Team.astro). `phone` is the full international number, digits only.
export const teamAreas = [
  {
    name: 'Directorio',
    description: 'Dirección general de la agencia.',
    members: [
      { name: 'Mirtha Barreto', role: 'CEO · Despachante de Aduanas', email: 'mirtha@barretoyasociados.com.py', phone: '595981221206' },
    ],
  },
  {
    name: 'Gestión de Comercio Internacional',
    description: 'Coordinación y seguimiento de las operaciones de importación, exportación y maquila.',
    members: [
      { name: 'Ing. Renato Barreto', role: 'Comercio exterior', email: 'rbarreto@barretoyasociados.com.py', phone: '595985440737' },
      { name: 'Adriana Barreto', role: 'Comercio exterior', email: 'abarreto@barretoyasociados.com.py', phone: '595984912251' },
      // [CONFIRM] The client's list gives the same e-mail for the next two people.
      { name: 'Juan Carlos González', role: 'Comercio exterior', email: 'nbarreto@barretoyasociados.com.py', phone: '595984915809' },
      { name: 'Lilian Escobar', role: 'Comercio exterior', email: 'nbarreto@barretoyasociados.com.py', phone: '595986168555' },
    ],
  },
  {
    name: 'Administración y Finanzas',
    description: 'Gestión administrativa, financiera y de recursos humanos.',
    members: [
      { name: 'Lic. Víctor Diez Pérez', role: 'CFO · Finanzas', email: 'vdiez@barretoyasociados.com.py', phone: '595984949589' },
      { name: 'Lic. Rocío Rodríguez', role: 'Recursos humanos', email: 'contabilidad@barretoyasociados.com.py', phone: '595984912733' },
    ],
  },
];

// Sectors served, shown instead of a client list. `image` is a base name under
// /public/images/rubros/ (any of .jpg/.webp/.png); a plain green card shows until the file exists.
// `goods` is one short line under the name (keep it to about 30 characters so it fits on one line).
// Names and goods are a draft derived from the sectors of the clients in
// barreto-y-asociados-info.md. [CONFIRM with client]
export const sectors = [
  { name: 'Papel y cartón', goods: 'Papel y cartón corrugado', image: 'papel-carton' },
  { name: 'Industria gráfica e imprenta', goods: 'Insumos y equipos de imprenta', image: 'grafica-imprenta' },
  { name: 'Textil y confecciones', goods: 'Prendas, mantas y alfombras', image: 'textil-confecciones' },
  { name: 'Madera y derivados', goods: 'Madera aserrada y multilaminada', image: 'madera' },
  { name: 'Maquinaria agrícola', goods: 'Maquinarias para el agro', image: 'maquinaria-agricola' },
  { name: 'Ferretería industrial', goods: 'Productos de ferretería', image: 'ferreteria-industrial' },
  { name: 'Granos', goods: 'Importación de granos', image: 'granos' },
  { name: 'Plásticos, resinas y envases', goods: 'Resinas PVC y preformas', image: 'plasticos-envases' },
  { name: 'Refrigeración y equipamiento comercial', goods: 'Congeladoras y estanterías', image: 'refrigeracion-equipamiento' },
  { name: 'Entidades sin fines de lucro', goods: 'Importaciones por Ley 302/93', image: 'sin-fines-de-lucro' },
];
