import general from '../content/general.json';
import experiencia from '../content/experiencia.json';
import proyectos from '../content/proyectos.json';
import formacion from '../content/formacion.json';

// El contenido se edita desde /keystatic (archivos en src/content/*.json).
export const site = {
  url: 'https://david-poch-silva.vercel.app',
  description: general.description,
  name: general.name,
  tagline: general.tagline,
  photo: general.photo,
  email: general.email, // también es el destino del formulario
  linkedin: general.linkedin,
  sobreMi: general.sobreMi,
  aficiones: general.aficiones,
};

export const nav = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#formacion', label: 'Formación' },
  { href: '#contacto', label: 'Contacto' },
];

export const experience = experiencia.items.map((e) => ({ ...e, url: e.url || null }));

export type Project = { title: string; role: string; url: string; label: string; icon: string; embed?: string; featured?: boolean };

// Si el enlace es un vídeo de YouTube, se incrusta automáticamente.
const youtubeId = (url: string) => url.match(/youtu\.be\/([\w-]{11})/)?.[1] ?? url.match(/[?&]v=([\w-]{11})/)?.[1];

export const projects: Project[] = proyectos.items.map((p) => ({ ...p, embed: youtubeId(p.url) }));

export const education = formacion.education;
export const sicue = formacion.sicue;
export const complementary = formacion.complementary;
export const skills: Record<string, string[]> = Object.fromEntries(formacion.skills.map((s) => [s.categoria, s.items]));
export const languages = formacion.languages;
export const volunteering = formacion.volunteering;

// Convierte **negrita** (guardada por el panel) en HTML seguro.
export const richText = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
