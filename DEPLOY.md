# Cómo desplegar a Netlify (capa 2 con auth)

Este proyecto ahora usa SSR (para el login), así que el deploy tiene un paso extra
respecto de la capa 1: hay que cargar las variables de entorno en Netlify.

## 1. Subir los cambios a GitHub

```bash
git add .
git commit -m "Capa 2: auth con Supabase + adaptador Netlify"
git push
```

## 2. Cargar las variables de entorno en Netlify

IMPORTANTE: el archivo .env NO se sube a GitHub, así que Netlify no tiene las
credenciales todavía. Hay que cargarlas a mano, una sola vez:

1. En Netlify, entrá a tu sitio → Site configuration → Environment variables.
2. Agregá estas dos variables (los mismos valores que tenés en tu .env local):

   PUBLIC_SUPABASE_URL          = https://TU-PROYECTO.supabase.co
   PUBLIC_SUPABASE_PUBLISHABLE_KEY = sb_publishable_TU_CLAVE

3. Guardá.

## 3. Redesplegar

Si ya habías conectado el repo a Netlify, el push del paso 1 dispara un deploy solo.
Pero como recién ahora cargaste las variables, conviene forzar un redeploy limpio:
en Netlify → Deploys → Trigger deploy → Deploy site.

## 4. Configurar la URL de redirección en Supabase

Para que el login funcione en el dominio de Netlify (no solo en localhost):

1. En Supabase → Authentication → URL Configuration.
2. En "Site URL" poné la URL de tu sitio Netlify (ej: https://tu-sitio.netlify.app).
3. En "Redirect URLs" agregá esa misma URL.

## 5. Probar

Entrá a tu sitio Netlify, registrate e iniciá sesión. Como el servidor corre en
Netlify (no en tu máquina), ESET ya no interfiere: el login debería andar fluido.

---

Nota: el desarrollo local sigue funcionando con `npm run dev`. El problema de ESET
era solo de tu red local; en Netlify no existe.
