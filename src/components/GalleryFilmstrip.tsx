import { Link } from "react-router-dom";
import { galleryItems } from "@/data/gallery";

const GalleryFilmstrip = () => {
  const strip = [...galleryItems.slice(0, 8), ...galleryItems.slice(0, 8)];

  return (
    <Link to="/galeria" className="relative block overflow-hidden border-y border-angelux-steel/25 bg-background" aria-label="Abrir galería">
      <div className="animate-marquee flex w-max gap-2 py-2">
        {strip.map((item, i) => (
          <div key={`${item.id}-${i}`} className="relative h-28 w-44 shrink-0 overflow-hidden md:h-36 md:w-56">
            <img src={item.image} alt="" className="h-full w-full object-cover opacity-80 grayscale-[0.3]" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
          </div>
        ))}
      </div>
    </Link>
  );
};

export default GalleryFilmstrip;
