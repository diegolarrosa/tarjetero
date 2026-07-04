// ui.ts — el diccionario de traducciones.
// Acá vive TODO el texto del sitio, en los dos idiomas.
// Para cambiar cualquier palabra, se edita solo este archivo.
// El castellano es la base; el inglés es la traducción espejo.

export const languages = {
  es: "Español",
  en: "English",
};

export const defaultLang = "es";

export const ui = {
  es: {
    "nav.editor": "Editor",
    "nav.login": "Ingresar",
    "nav.login.title": "Disponible cuando sumemos usuarios",
    "hero.eyebrow": "Papelería digital",
    "hero.title": "Convertí una cita en una tarjeta que da ganas de compartir.",
    "hero.subtitle": "Escribí, elegí un fondo y una tipografía, y descargá la imagen. Sin cuentas, sin fricción.",
    "editor.quote.label": "Tu cita",
    "editor.quote.placeholder": "Escribí algo memorable…",
    "editor.quote.default": "La simplicidad es la máxima sofisticación.",
    "editor.author.label": "Autor",
    "editor.author.default": "Leonardo da Vinci",
    "editor.bg.label": "Fondo",
    "editor.font.label": "Tipografía",
    "editor.font.serif": "Serif",
    "editor.font.sans": "Sans",
    "editor.font.mono": "Mono",
    "editor.download": "Descargar imagen",
    "editor.dimensions": "600 × 600 px · listo para redes",
    "footer.text": "Tarjetero · proyecto de práctica · Astro + Tailwind + Fabric.js",
    "meta.title": "Tarjetero — generador de tarjetas de cita",
    "meta.description": "Diseñá una tarjeta con tu cita favorita, elegí colores y tipografía, y descargala como imagen lista para compartir.",
  },
  en: {
    "nav.editor": "Editor",
    "nav.login": "Sign in",
    "nav.login.title": "Available once we add user accounts",
    "hero.eyebrow": "Digital stationery",
    "hero.title": "Turn a quote into a card worth sharing.",
    "hero.subtitle": "Type it, pick a background and a typeface, and download the image. No accounts, no friction.",
    "editor.quote.label": "Your quote",
    "editor.quote.placeholder": "Write something memorable…",
    "editor.quote.default": "Simplicity is the ultimate sophistication.",
    "editor.author.label": "Author",
    "editor.author.default": "Leonardo da Vinci",
    "editor.bg.label": "Background",
    "editor.font.label": "Typeface",
    "editor.font.serif": "Serif",
    "editor.font.sans": "Sans",
    "editor.font.mono": "Mono",
    "editor.download": "Download image",
    "editor.dimensions": "600 × 600 px · ready for social",
    "footer.text": "Tarjetero · practice project · Astro + Tailwind + Fabric.js",
    "meta.title": "Tarjetero — quote card generator",
    "meta.description": "Design a card with your favorite quote, choose colors and typography, and download it as a ready-to-share image.",
  },
} as const;
