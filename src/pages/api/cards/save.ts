// Guarda una tarjeta del usuario logueado.
// Corre en el servidor con la sesión del usuario, así RLS aplica solo:
// la base rechaza cualquier intento de guardar a nombre de otro.
export const prerender = false;

import type { APIRoute } from "astro";
import { createSupabaseServerClient } from "../../../lib/supabase";

export const POST: APIRoute = async ({ request, cookies }) => {
  const supabase = createSupabaseServerClient(cookies);

  // Verificamos que haya sesión
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return new Response(JSON.stringify({ error: "no-session" }), { status: 401 });
  }

  // El cuerpo trae el diseño de la tarjeta (JSON serializado de Fabric.js + metadatos)
  let contenido;
  try {
    contenido = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: "bad-json" }), { status: 400 });
  }

  const { error } = await supabase.from("tarjetas").insert({
    user_id: user.id,
    proyecto_id: "tarjetero",
    contenido,
  });

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }

  return new Response(JSON.stringify({ ok: true }), { status: 200 });
};
