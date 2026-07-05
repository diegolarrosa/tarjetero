// Borra una tarjeta del usuario logueado.
// RLS garantiza que solo pueda borrar las suyas, aunque mande otro id.
export const prerender = false;

import type { APIRoute } from "astro";
import { createSupabaseServerClient } from "../../../lib/supabase";

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const supabase = createSupabaseServerClient(cookies);

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return redirect("/login");

  const form = await request.formData();
  const id = form.get("id")?.toString();
  if (!id) return redirect("/account");

  // No hace falta filtrar por user_id: la política RLS de DELETE ya lo fuerza.
  await supabase.from("tarjetas").delete().eq("id", id);

  return redirect("/account");
};
