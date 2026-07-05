// Endpoint de login. Verifica credenciales y crea la sesión (cookies).
export const prerender = false;

import type { APIRoute } from "astro";
import { createSupabaseServerClient } from "../../../lib/supabase";

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const form = await request.formData();
  const email = form.get("email")?.toString();
  const password = form.get("password")?.toString();

  if (!email || !password) {
    return redirect("/login?error=1");
  }

  const supabase = createSupabaseServerClient(cookies);
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    return redirect("/login?error=1");
  }

  return redirect("/account");
};
