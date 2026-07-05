// citas.ts — colección curada de citas por tema.
// Contenido propio y con sustancia (bueno para SEO). Cada cita puede llevarse
// al editor con un clic. Podés agregar más temas y citas libremente.

export interface Cita {
  texto: string;
  autor: string;
}

export interface TemaCitas {
  slug: string;
  titulo: string;
  descripcion: string;
  citas: Cita[];
}

export const temas: TemaCitas[] = [
  {
    slug: "motivacion",
    titulo: "Frases de motivación",
    descripcion:
      "Citas para empezar el día con impulso, encarar un proyecto o recordar por qué vale la pena seguir.",
    citas: [
      { texto: "La simplicidad es la máxima sofisticación.", autor: "Leonardo da Vinci" },
      { texto: "El único modo de hacer un gran trabajo es amar lo que hacés.", autor: "Steve Jobs" },
      { texto: "No importa lo lento que vayas mientras no te detengas.", autor: "Confucio" },
      { texto: "El futuro pertenece a quienes creen en la belleza de sus sueños.", autor: "Eleanor Roosevelt" },
      { texto: "Empezá donde estás. Usá lo que tenés. Hacé lo que puedas.", autor: "Arthur Ashe" },
    ],
  },
  {
    slug: "amor",
    titulo: "Frases de amor",
    descripcion:
      "Citas sobre el amor, el afecto y los vínculos, para dedicar o guardar.",
    citas: [
      { texto: "Donde hay amor, hay vida.", autor: "Mahatma Gandhi" },
      { texto: "Amar no es mirarse el uno al otro, es mirar juntos en la misma dirección.", autor: "Antoine de Saint-Exupéry" },
      { texto: "El amor no se mira, se siente, y aún más cuando ella está cerca.", autor: "Gustavo Adolfo Bécquer" },
      { texto: "Te amo no por quién sos, sino por quién soy cuando estoy con vos.", autor: "Gabriel García Márquez" },
    ],
  },
  {
    slug: "exito",
    titulo: "Frases de éxito",
    descripcion:
      "Citas sobre el logro, la constancia y el crecimiento, para acompañar tus metas.",
    citas: [
      { texto: "El éxito es la suma de pequeños esfuerzos repetidos día tras día.", autor: "Robert Collier" },
      { texto: "No midas tu éxito por lo que lográs, sino por los obstáculos que superás.", autor: "Booker T. Washington" },
      { texto: "El éxito es ir de fracaso en fracaso sin perder el entusiasmo.", autor: "Winston Churchill" },
      { texto: "La disciplina es el puente entre las metas y los logros.", autor: "Jim Rohn" },
    ],
  },
];
