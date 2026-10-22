export type GalleryZone = "manga" | "pierna";

export type GalleryItem = {
  id: number;
  title: string;
  zone: GalleryZone;
  zoneLabel: string;
  styleLabel: string;
  location: string;
  /** Latest work: shown first in the gallery and in the home showcase. */
  featured: boolean;
  image: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: 23,
    title: "Akaza",
    zone: "manga",
    zoneLabel: "Manga",
    styleLabel: "Anime / sombras",
    location: "Medellín",
    featured: true,
    image: "/gallery/mangas/akaza.jpg",
  },
  {
    id: 21,
    title: "Deadpool",
    zone: "manga",
    zoneLabel: "Manga",
    styleLabel: "Color / realismo",
    location: "Medellín",
    featured: true,
    image: "/gallery/mangas/deadpool.jpg",
  },
  {
    id: 22,
    title: "Spider-Man",
    zone: "manga",
    zoneLabel: "Manga",
    styleLabel: "Realismo / sombras",
    location: "Medellín",
    featured: true,
    image: "/gallery/mangas/spiderman.jpg",
  },
  {
    id: 1,
    title: "Manga Zeus",
    zone: "manga",
    zoneLabel: "Manga",
    styleLabel: "Realismo / sombras",
    location: "Medellín",
    featured: false,
    image: "/gallery/mangas/zeus-lobo.jpg",
  },
  {
    id: 2,
    title: "Anubis y búho",
    zone: "manga",
    zoneLabel: "Manga",
    styleLabel: "Realismo / sombras",
    location: "Medellín",
    featured: false,
    image: "/gallery/mangas/anubis.jpg",
  },
  {
    id: 3,
    title: "León",
    zone: "manga",
    zoneLabel: "Manga",
    styleLabel: "Realismo / sombras",
    location: "Medellín",
    featured: false,
    image: "/gallery/mangas/leon.jpg",
  },
  {
    id: 4,
    title: "Vikingo",
    zone: "manga",
    zoneLabel: "Manga",
    styleLabel: "Realismo / sombras",
    location: "Medellín",
    featured: false,
    image: "/gallery/mangas/vikingo.jpg",
  },
  {
    id: 5,
    title: "Gótico",
    zone: "manga",
    zoneLabel: "Manga",
    styleLabel: "Realismo / sombras",
    location: "Medellín",
    featured: false,
    image: "/gallery/mangas/gotico.jpg",
  },
  {
    id: 6,
    title: "Kratos",
    zone: "manga",
    zoneLabel: "Manga",
    styleLabel: "Realismo / sombras",
    location: "Medellín",
    featured: false,
    image: "/gallery/mangas/kratos.jpg",
  },
  {
    id: 7,
    title: "Buda",
    zone: "manga",
    zoneLabel: "Manga",
    styleLabel: "Realismo / sombras",
    location: "Medellín",
    featured: false,
    image: "/gallery/mangas/buda.jpg",
  },
  {
    id: 8,
    title: "Catrina",
    zone: "manga",
    zoneLabel: "Manga",
    styleLabel: "Realismo / sombras",
    location: "Medellín",
    featured: false,
    image: "/gallery/mangas/catrina.jpg",
  },
  {
    id: 9,
    title: "Gladiador",
    zone: "manga",
    zoneLabel: "Manga",
    styleLabel: "Realismo / sombras",
    location: "Medellín",
    featured: false,
    image: "/gallery/mangas/gladiador.jpg",
  },
  {
    id: 10,
    title: "Virgen",
    zone: "manga",
    zoneLabel: "Manga",
    styleLabel: "Realismo / sombras",
    location: "Medellín",
    featured: false,
    image: "/gallery/mangas/virgen.jpg",
  },
  {
    id: 11,
    title: "Retrato",
    zone: "manga",
    zoneLabel: "Manga",
    styleLabel: "Realismo / sombras",
    location: "Medellín",
    featured: false,
    image: "/gallery/mangas/retrato.jpg",
  },
  {
    id: 12,
    title: "Zeus — detalle",
    zone: "manga",
    zoneLabel: "Manga",
    styleLabel: "Realismo / sombras",
    location: "Medellín",
    featured: false,
    image: "/gallery/mangas/zeus.jpg",
  },
  {
    id: 13,
    title: "Arcángel",
    zone: "pierna",
    zoneLabel: "Pierna",
    styleLabel: "Realismo / sombras",
    location: "Medellín",
    featured: false,
    image: "/gallery/piernas/arcangel.jpg",
  },
  {
    id: 14,
    title: "Gato samurái",
    zone: "manga",
    zoneLabel: "Manga",
    styleLabel: "Color / realismo",
    location: "Medellín",
    featured: false,
    image: "/gallery/mangas/gato-samurai.jpg",
  },
  {
    id: 15,
    title: "Ganesha",
    zone: "manga",
    zoneLabel: "Manga",
    styleLabel: "Realismo / sombras",
    location: "Medellín",
    featured: false,
    image: "/gallery/mangas/ganesha.jpg",
  },
  {
    id: 16,
    title: "Zeus — grecas",
    zone: "manga",
    zoneLabel: "Manga",
    styleLabel: "Realismo / sombras",
    location: "Medellín",
    featured: false,
    image: "/gallery/mangas/zeus-grecas.jpg",
  },
  {
    id: 17,
    title: "Ilusión",
    zone: "manga",
    zoneLabel: "Manga",
    styleLabel: "Realismo / sombras",
    location: "Medellín",
    featured: false,
    image: "/gallery/mangas/ilusion.jpg",
  },
  {
    id: 18,
    title: "Viaje",
    zone: "manga",
    zoneLabel: "Manga",
    styleLabel: "Realismo / sombras",
    location: "Medellín",
    featured: false,
    image: "/gallery/mangas/viaje.jpg",
  },
  {
    id: 19,
    title: "Gato samurái",
    zone: "pierna",
    zoneLabel: "Pierna",
    styleLabel: "Realismo / sombras",
    location: "Medellín",
    featured: false,
    image: "/gallery/piernas/gato-samurai.jpg",
  },
  {
    id: 20,
    title: "Lobo",
    zone: "pierna",
    zoneLabel: "Pierna",
    styleLabel: "Realismo / sombras",
    location: "Medellín",
    featured: false,
    image: "/gallery/piernas/lobo.jpg",
  },
  {
    id: 24,
    title: "Spider-Man — sesión",
    zone: "manga",
    zoneLabel: "Manga",
    styleLabel: "Realismo / sombras",
    location: "Medellín",
    featured: false,
    image: "/gallery/mangas/spiderman-sesion.jpg",
  },
];

const byId = (id: number) => {
  const item = galleryItems.find((entry) => entry.id === id);
  if (!item) throw new Error(`Gallery item ${id} not found`);
  return item;
};

/** Big rotating image on the home page: full sleeves read well when cropped wide. */
export const homeShowcase = [1, 7, 3, 2, 6, 4].map(byId);

/** Thumbnails next to it: latest work plus one standout piece. */
export const homeHighlights = [23, 21, 22, 14].map(byId);

export const galleryAlt = (item: GalleryItem) =>
  `Tatuaje ${item.title} en ${item.zoneLabel.toLowerCase()}, ${item.styleLabel.toLowerCase()} — Angelux Ink, ${item.location}`;

export const galleryFilters: { value: "all" | GalleryZone; label: string }[] = [
  { value: "all", label: "Todo" },
  { value: "manga", label: "Mangas" },
  { value: "pierna", label: "Piernas" },
];
