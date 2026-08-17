export type GalleryZone = "manga" | "pierna";

export type GalleryItem = {
  id: number;
  title: string;
  zone: GalleryZone;
  zoneLabel: string;
  styleLabel: string;
  location: string;
  featured: boolean;
  image: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Manga Zeus",
    zone: "manga",
    zoneLabel: "Manga",
    styleLabel: "Realismo / sombras",
    location: "Medellín",
    featured: true,
    image: "/gallery/mangas/zeus-lobo.jpg",
  },
  {
    id: 2,
    title: "Anubis y búho",
    zone: "manga",
    zoneLabel: "Manga",
    styleLabel: "Realismo / sombras",
    location: "Medellín",
    featured: true,
    image: "/gallery/mangas/anubis.jpg",
  },
  {
    id: 3,
    title: "León",
    zone: "manga",
    zoneLabel: "Manga",
    styleLabel: "Realismo / sombras",
    location: "Medellín",
    featured: true,
    image: "/gallery/mangas/leon.jpg",
  },
  {
    id: 4,
    title: "Vikingo",
    zone: "manga",
    zoneLabel: "Manga",
    styleLabel: "Realismo / sombras",
    location: "Medellín",
    featured: true,
    image: "/gallery/mangas/vikingo.jpg",
  },
  {
    id: 5,
    title: "Gótico",
    zone: "manga",
    zoneLabel: "Manga",
    styleLabel: "Realismo / sombras",
    location: "Medellín",
    featured: true,
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
];

export const galleryFilters: { value: "all" | GalleryZone; label: string }[] = [
  { value: "all", label: "Todo" },
  { value: "manga", label: "Mangas" },
  { value: "pierna", label: "Piernas" },
];
