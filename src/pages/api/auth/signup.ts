// Endpoint de registro. Recibe el formulario y crea el usuario en Supabase.
export const prerender = false;

console.log("URL leída:", import.meta.env.PUBLIC_SUPABASE_URL);

import type { APIRoute } from "astro";
import { createSupabaseServerClient } from "../../../lib/supabase";

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const form = await request.formData();
  const email = form.get("email")?.toString();
  const password = form.get("password")?.toString();

  if (!email || !password) {
    return redirect("/register?error=1");
  }

  const supabase = createSupabaseServerClient(cookies);
  const { error } = await supabase.auth.signUp({ email, password });

  if (error) {
    return redirect("/register?error=1");
  }

  // Según la config de Supabase, puede requerir confirmar el email.
  // Mandamos al login con un aviso.
  return redirect("/login?registered=1");
};
