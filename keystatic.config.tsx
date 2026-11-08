import { config, fields, singleton } from '@keystatic/core';

const isProd = import.meta.env?.PROD;

export default config({
  // En local se editan los archivos directamente; en producción se usa Keystatic Cloud.
  storage: isProd ? { kind: 'cloud' } : { kind: 'local' },
  cloud: { project: 'david-poch-portfolio/david-poch-portfolio' },
  ui: { brand: { name: 'Web de David Poch' } },
  singletons: {
    general: singleton({
      label: 'Datos generales',
      path: 'src/content/general',
      format: { data: 'json' },
      schema: {
        name: fields.text({ label: 'Nombre' }),
        tagline: fields.text({ label: 'Frase bajo el nombre' }),
        description: fields.text({ label: 'Descripción para Google (1-2 frases)', multiline: true }),
        photo: fields.image({ label: 'Foto principal', directory: 'public', publicPath: '/' }),
        email: fields.text({ label: 'Email de contacto (aquí llegan los mensajes del formulario)' }),
        linkedin: fields.url({ label: 'Enlace de LinkedIn' }),
        sobreMi: fields.markdoc.inline({ label: 'Texto de "Sobre mí" (selecciona y pulsa B para negrita)', options: { bold: true, italic: false, strikethrough: false, code: false, link: false }, }),
        aficiones: fields.array(
          fields.object({
            titulo: fields.text({ label: 'Título (puedes empezar con un emoji)' }),
            texto: fields.markdoc.inline({ label: 'Texto (selecciona y pulsa B para negrita)', options: { bold: true, italic: false, strikethrough: false, code: false, link: false }, }),
          }),
          { label: 'Tarjetas de aficiones', itemLabel: (p) => p.fields.titulo.value },
        ),
      },
    }),
    experiencia: singleton({
      label: 'Experiencia',
      path: 'src/content/experiencia',
      format: { data: 'json' },
      schema: {
        items: fields.array(
          fields.object({
            role: fields.text({ label: 'Puesto' }),
            company: fields.text({ label: 'Empresa' }),
            dates: fields.text({ label: 'Fechas (ej: Dic 2025 – Ago 2026)' }),
            url: fields.text({ label: 'Enlace de la empresa (opcional)' }),
            points: fields.array(fields.text({ label: 'Punto', multiline: true }), {
              label: 'Qué hiciste (una línea por punto)',
              itemLabel: (p) => p.value,
            }),
          }),
          { label: 'Trabajos (el primero es el más reciente)', itemLabel: (p) => `${p.fields.role.value} · ${p.fields.company.value}` },
        ),
      },
    }),
    proyectos: singleton({
      label: 'Proyectos',
      path: 'src/content/proyectos',
      format: { data: 'json' },
      schema: {
        items: fields.array(
          fields.object({
            title: fields.text({ label: 'Título' }),
            role: fields.text({ label: 'Tu papel / descripción' }),
            url: fields.text({ label: 'Enlace (YouTube, IMDb, etc.)' }),
            label: fields.text({ label: 'Etiqueta (ej: YouTube, Pódcast, IMDb)' }),
            icon: fields.text({ label: 'Emoji (se usa si el enlace no es un vídeo de YouTube)' }),
            featured: fields.checkbox({ label: 'Destacado (aparece arriba, más grande)', defaultValue: false }),
          }),
          { label: 'Proyectos', itemLabel: (p) => p.fields.title.value },
        ),
      },
    }),
    formacion: singleton({
      label: 'Formación y competencias',
      path: 'src/content/formacion',
      format: { data: 'json' },
      schema: {
        education: fields.array(
          fields.object({
            title: fields.text({ label: 'Título' }),
            place: fields.text({ label: 'Centro' }),
            dates: fields.text({ label: 'Años' }),
          }),
          { label: 'Formación académica', itemLabel: (p) => p.fields.title.value },
        ),
        sicue: fields.array(fields.text({ label: 'Universidad' }), { label: 'Intercambios SICUE', itemLabel: (p) => p.value }),
        complementary: fields.array(fields.text({ label: 'Curso' }), { label: 'Formación complementaria', itemLabel: (p) => p.value }),
        skills: fields.array(
          fields.object({
            categoria: fields.text({ label: 'Categoría (ej: Técnicas)' }),
            items: fields.array(fields.text({ label: 'Competencia' }), { label: 'Competencias', itemLabel: (p) => p.value }),
          }),
          { label: 'Competencias', itemLabel: (p) => p.fields.categoria.value },
        ),
        languages: fields.array(
          fields.object({
            name: fields.text({ label: 'Idioma' }),
            level: fields.text({ label: 'Nivel' }),
          }),
          { label: 'Idiomas', itemLabel: (p) => p.fields.name.value },
        ),
        volunteering: fields.array(fields.text({ label: 'Actividad' }), { label: 'Voluntariado y otros', itemLabel: (p) => p.value }),
      },
    }),
  },
});
