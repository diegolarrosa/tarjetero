// utils.ts — dos ayudantes para el sistema de idiomas.
import { ui, defaultLang } from "./ui";

// Detecta el idioma a partir de la URL (/en/... → "en"; el resto → "es")
export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

// Devuelve una función t() que traduce una clave al idioma actual.
// Si una clave no está traducida, cae al idioma por defecto (castellano).
export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
