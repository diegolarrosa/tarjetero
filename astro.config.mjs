// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // Internacionalización: castellano por defecto (sin prefijo, en la raíz /),
  // inglés como segundo idioma en /en/.
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false, // "/" = español, "/en/" = inglés
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
