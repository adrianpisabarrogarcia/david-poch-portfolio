// ⚠️ Rellena estos valores antes de publicar
export const site = {
  url: 'https://david-poch-silva.vercel.app',
  description: 'Portfolio de David Poch Silva: comunicador audiovisual y productor de televisión deportiva (Jugones laSexta, TV3). Experiencia, proyectos y contacto.',
  name: 'David Poch Silva',
  tagline: 'Comunicador Audiovisual · Productor audiovisual',
  photo: '/david.webp',
  email: 'dpoch1234@gmail.com', // también es el destino del formulario
  linkedin: 'https://www.linkedin.com/in/david-poch-silva-b7a8131b9/', // URL de LinkedIn definitiva
};

export const nav = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#formacion', label: 'Formación' },
  { href: '#contacto', label: 'Contacto' },
];

export const experience = [
  { role: 'Ayudante de Producción y productor titular', company: 'JUGONES (laSexta · Atresmedia)', dates: 'Dic 2025 – Ago 2026', url: 'https://www.lasexta.com/programas/jugones/',
    points: ['De ayudante a productor titular en algunas emisiones.', 'Acreditaciones, gestión de personal y solicitud de equipos.', 'Coordinación, control en Excel y facturación de proveedores.'] },
  { role: 'Prácticas Producción TV', company: 'JUGONES (laSexta · Atresmedia)', dates: 'Jun 2025 – Nov 2025', url: 'https://www.lasexta.com/programas/jugones/',
    points: ['Contrato de prácticas en producción televisiva.', 'Acreditaciones, gestión de personal y petición de equipos.', 'Soporte al equipo de producción.'] },
  { role: 'Redactor en prácticas', company: 'País Invisible · El Jornalet', dates: '2024 · 5 meses', url: 'https://www.eljornalet.cat',
    points: ['Prácticas extracurriculares en pódcast y diario digital.', 'Redacción y soporte corporativo.'] },
  { role: 'CM Twitter / Colaborador', company: 'CinemaNet', dates: '2022 – 2023', url: null as string | null,
    points: ['Community Manager de la cuenta de Twitter.', 'Críticas de cine y artículos.'] },
  { role: 'Mistery Shopper', company: 'Service Innovation Group', dates: '2023 · 6 meses', url: null,
    points: ['Observación de promotoras en estancos.', 'Comprobación de la correcta argumentación de los azafatos/as.'] },
  { role: 'Auxiliar de montaje', company: 'Freeyourpost', dates: '2023 · 1 mes', url: null,
    points: ['Prácticas en empresa de gestión de postproducción.', 'Control de calidad de los montajes y gestión administrativa.'] },
  { role: 'Prácticas curriculares', company: 'CCMA · TV3', dates: '2021 – 2022 · 4 meses', url: 'https://www.ccma.cat/tv3/',
    points: ['Departamento de producción en deportes.', 'Soporte a tareas básicas de producción.'] },
];

export type Project = { title: string; role: string; url: string; label: string; icon: string; embed?: string; featured?: boolean };

export const projects: Project[] = [
  { title: 'La superilla', role: 'Productor · Cortometraje documental', url: 'https://goo.su/h30L7', label: 'Documental', icon: '🎞️', featured: true },
  { title: 'Fu(tu)r', role: 'Director · Cortometraje', url: 'https://youtu.be/rs_UMhX8Afc', label: 'YouTube', icon: '🎬', embed: 'rs_UMhX8Afc', featured: true },
  { title: 'Talkeando', role: 'Pódcast · Trabajo de Fin de Grado', url: 'https://www.youtube.com/@Talkeando-PodcastTalks', label: 'Pódcast', icon: '🎙️', featured: true },
  { title: 'Querido', role: 'Iluminación · Cortometraje', url: 'https://youtu.be/t6FSQxa6PU8', label: 'YouTube', icon: '💡', embed: 't6FSQxa6PU8' },
  { title: 'Espejo inconsciente', role: 'Ayudante de cámara y guion técnico', url: 'https://youtu.be/fJdVv_Ff15E', label: 'YouTube', icon: '🎥', embed: 'fJdVv_Ff15E' },
  { title: 'Cambalache', role: 'Gaffer y casting voz de doblaje', url: 'https://www.imdb.com/title/tt31382070/fullcredits/', label: 'IMDb', icon: '⭐' },
  { title: 'Merienda', role: 'Realizador y creador de la saga de cortometrajes experimentales', url: 'https://youtube.com/playlist?list=PLqTBUm360zL9l5sEm_Ce3glDgEihGZ2j4', label: 'Playlist', icon: '🍪' },
];

export const education = [
  { title: 'Máster en Cine y TV', place: 'Universidad Carlos III', dates: '2024–2025' },
  { title: 'Grado en Comunicación Audiovisual', place: 'Universitat de Barcelona', dates: '2019–2023' },
  { title: 'Bachillerato', place: 'Institució La Farga', dates: '2017–2019' },
];
export const sicue = ['Universidad del País Vasco', 'Universidad Complutense de Madrid'];
export const complementary = [
  'Competencias digitales en Emprendimiento Audiovisual — ECAM',
  'Introducción a la realización audiovisual para Social Media',
  'Pensamiento Creativo en la era de la IA — Universitat de Barcelona',
  'Fotografía Digital — Blackkmera, Universidad del País Vasco',
  'Participación en la realización de un juicio — Universidad Complutense de Madrid',
  'Principales Contratos en Producción Audiovisual — Instituto RTVE',
  'Saber hablar en público — saberhablar.com, con Fernando Silva Castignani',
];
export const skills = {
  Técnicas: ['Adobe Premiere Pro (avanzado)', 'DaVinci Resolve', 'After Effects', 'Photoshop', 'Canva', 'Reaper', 'Word', 'Excel', 'Google Drive'],
  Producción: ['Acreditaciones', 'Gestión de personal', 'Solicitud de equipos', 'Coordinación', 'Facturación de proveedores'],
  Aptitudes: ['Trabajo en equipo', 'Polivalente', 'Proactivo', 'Buena capacidad de aprendizaje'],
};
export const languages = [
  { name: 'Castellano', level: 'Alto · Nativo' },
  { name: 'Catalán', level: 'Alto · Nativo' },
  { name: 'Inglés', level: 'B2 académico' },
];
export const volunteering = ['Voluntariado Val d\'Aran by UTMB (carreras ultra-trail Pirineos)', 'Monitor de taller de refuerzo escolar en colegio / instituto'];
