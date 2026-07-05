// Devuelve UNA tarjeta del usuario logueado, por id.
// RLS garantiza que solo pueda traer las suyas.
export const prerender = false;

import type { APIRoute } from "astro";
import { createSupabaseServerClient } from "../../../lib/supabase";

export const GET: APIRoute = async ({ url, cookies }) => {
  const supabase = createSupabaseServerClient(cookies);

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return new Response(JSON.stringify({ error: "no-session" }), { status: 401 });
  }

  const id = url.searchParams.get("id");
  if (!id) {
    return new Response(JSON.stringify({ error: "no-id" }), { status: 400 });
  }

  const { data, error } = await supabase
    .from("tarjetas")
    .select("contenido")
    .eq("id", id)
    .single();

  if (error || !data) {
    return new Response(JSON.stringify({ error: "not-found" }), { status: 404 });
  }

  return new Response(JSON.stringify(data.contenido), { status: 200 });
};
