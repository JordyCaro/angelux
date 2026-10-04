export const siteUrl = "https://angelux-ink.com";

export type PageMeta = {
  title: string;
  description: string;
};

export const defaultMeta: PageMeta = {
  title: "Angelux Ink — Tatuajes de realismo y sombras en Medellín",
  description:
    "Tatuajes de realismo y sombras en Medellín. Jonathan diseña cada pieza desde cero: mangas, piernas y retratos únicos. Estudio privado con cita previa. Cotiza por WhatsApp.",
};

export const routeMeta: Record<string, PageMeta> = {
  "/": defaultMeta,
  "/galeria": {
    title: "Galería de tatuajes de realismo en Medellín — Angelux Ink",
    description:
      "Mangas y piernas en realismo y sombras hechas por Jonathan en Medellín: Zeus, Anubis, Ganesha, catrinas, retratos y más. Piezas reales, sin copias de Pinterest.",
  },
  "/servicios": {
    title: "Servicios y cuidados del tatuaje — Angelux Ink Medellín",
    description:
      "Tatuajes 100% a medida en realismo y sombras: mangas, piernas y piezas grandes. Cómo trabajo, cómo se agenda y el protocolo completo de cuidado después de tatuarte.",
  },
  "/estudio": {
    title: "Estudio privado de tatuajes en Medellín — Angelux Ink",
    description:
      "Un estudio privado y tranquilo en Medellín, con cita previa. Así se arma una sesión de tatuaje con Jonathan, sin afanes y con un trabajo impecable.",
  },
  "/sobre-mi": {
    title: "Sobre Jonathan, tatuador de realismo en Medellín — Angelux Ink",
    description:
      "Conoce a Jonathan, tatuador especializado en realismo y sombras en Medellín. Su forma de trabajar, su proceso y por qué cada pieza se construye desde cero.",
  },
  "/contacto": {
    title: "Cotiza tu tatuaje en Medellín por WhatsApp — Angelux Ink",
    description:
      "Escríbele a Jonathan por WhatsApp al +57 300 3989190: cuéntale tu idea, la zona del cuerpo y envía referencias. Estudio privado en Medellín, cita previa.",
  },
};

export const notFoundMeta: PageMeta = {
  title: "Página no encontrada — Angelux Ink",
  description: defaultMeta.description,
};
