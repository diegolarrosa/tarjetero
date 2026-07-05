// supabase.ts — crea el cliente de Supabase para código de servidor.
// Punto clave (trampa documentada): se crea un cliente NUEVO por cada petición,
// nunca uno reutilizado, porque la sesión vive en las cookies de ESA petición.
// Reutilizar una instancia filtraría la sesión de un usuario a otro.

import { createServerClient, type CookieOptions } from "@supabase/ssr";
import type { AstroCookies } from "astro";

export function createSupabaseServerClient(cookies: AstroCookies) {
  return createServerClient(
    import.meta.env.PUBLIC_SUPABASE_URL,
    import.meta.env.PUBLIC_SUPABASE_PUBLISHABLE_KEY,
    {
      cookies: {
        // Supabase lee y escribe la sesión a través de estas funciones,
        // usando las cookies de la petición actual.
        get(key: string) {
          return cookies.get(key)?.value;
        },
        set(key: string, value: string, options: CookieOptions) {
          cookies.set(key, value, { ...options, path: "/" });
        },
        remove(key: string, options: CookieOptions) {
          cookies.delete(key, { ...options, path: "/" });
        },
      },
    }
  );
}
