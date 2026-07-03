# Tarjetero — generador de tarjetas de cita

Proyecto inicial de práctica. Stack: Astro + Tailwind CSS v4 + Fabric.js.

## Cómo correrlo

Necesitás Node.js 18 o superior instalado.

```bash
npm install      # instala dependencias (crea node_modules/)
npm run dev      # servidor de desarrollo con hot reload → http://localhost:4321
```

Otros comandos:

```bash
npm run build    # compila el sitio a dist/ (HTML estático)
npm run preview  # sirve la versión compilada, para ver cómo queda en producción
```

## Estructura

```
src/
  layouts/BaseLayout.astro   → el "shell" HTML: <head>, fuentes, meta tags de SEO
  components/
    Header.astro             → encabezado reutilizable (acá irá el login en el paso 2)
    CardEditor.astro         → el editor: controles (HTML) + canvas interactivo (Fabric.js)
  pages/index.astro          → la home, que ensambla layout + header + editor
  styles/global.css          → sistema de diseño (paleta, tipografías) como tokens
public/favicon.svg           → ícono
```

## Notas de diseño

- Estética "papelería editorial": paleta tierra-verdosa, tipografías Fraunces + Inter + IBM Plex Mono.
- El texto de la página se sirve en el HTML (bueno para SEO / crawlers de IA); solo el canvas usa JavaScript.
- El color del texto de la tarjeta se ajusta solo según el fondo, para mantener la legibilidad.

## Próximos pasos posibles

1. Guardar tarjetas por usuario (Supabase → capa de usuarios + datos).
2. Más opciones de diseño (posición del texto, imágenes de fondo).
3. Versión premium con Stripe (más plantillas, exportar en alta resolución).
