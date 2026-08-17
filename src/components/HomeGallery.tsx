import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, MapPin } from "lucide-react";
import { galleryItems } from "@/data/gallery";

const featuredPool = galleryItems.filter((item) => item.featured);

const HomeGallery = () => {
  const [active, setActive] = useState(featuredPool[0]);
  const stack = featuredPool.slice(1, 5);

  return (
    <section className="relative overflow-hidden border-y border-border">
      <div className="pointer-events-none absolute inset-0 ink-texture opacity-40" />
      <p className="pointer-events-none absolute -right-8 top-0 font-metal text-[28vw] leading-none text-primary/[0.035]">
        SKIN
      </p>

      <div className="relative grid min-h-0 lg:min-h-[92vh] lg:grid-cols-12">
        <div className="group relative min-h-[56vh] overflow-hidden sm:min-h-[62vh] lg:col-span-8 lg:min-h-[92vh]">
          <AnimatePresence mode="wait">
            <motion.img
              key={active.id}
              src={active.image}
              alt={active.title}
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.55 }}
              className="absolute inset-0 h-full w-full object-cover contrast-110 transition-[filter] duration-700"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-transparent to-background/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/20" />

          <div className="absolute left-6 top-24 md:left-10">
            <p className="ink-stamp">ARCHIVO · REAL</p>
          </div>

          <div className="absolute bottom-8 left-6 right-6 md:left-10 md:right-auto md:max-w-lg">
            <p className="font-cinzel text-[10px] tracking-[0.35em] text-angelux-steel">
              {active.zoneLabel} · {active.styleLabel}
            </p>
            <h2 className="mt-2 font-metal text-4xl text-primary md:text-6xl">{active.title}</h2>
            <p className="mt-3 flex items-center gap-2 font-montserrat text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-angelux-steel" />
              {active.location} · {active.zoneLabel} · {active.styleLabel}
            </p>
          </div>
        </div>

        <div className="relative flex flex-col justify-between border-t border-border bg-background/80 p-6 lg:col-span-4 lg:border-l lg:border-t-0 lg:p-8">
          <div>
            <p className="mb-2 font-cinzel text-[11px] tracking-[0.4em] text-angelux-steel">ARCHIVO</p>
            <h3 className="font-metal text-3xl text-primary md:text-4xl">Las mangas</h3>
            <p className="mt-4 max-w-sm font-montserrat text-sm leading-relaxed text-muted-foreground">
              Un recorte del archivo real. El muro completo está en galería: más piezas, más sombra, más piel.
            </p>
          </div>

          <div className="my-8 grid grid-cols-2 gap-4">
            {stack.map((item, i) => (
              <button
                key={item.id}
                type="button"
                onMouseEnter={() => setActive(item)}
                onFocus={() => setActive(item)}
                onClick={() => setActive(item)}
                className={`flash-card group text-left ${i % 2 ? "sm:translate-y-4" : "sm:-translate-y-1"}`}
                style={{ transform: `rotate(${i % 2 ? 2.4 : -1.8}deg)` }}
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-500"
                  />
                  <span className="absolute left-2 top-2 font-cinzel text-[9px] tracking-widest text-white/80">
                    {item.zoneLabel}
                  </span>
                </div>
                <p className="mt-2 truncate px-1 font-cinzel text-[10px] tracking-[0.18em] text-muted-foreground">
                  {item.title}
                </p>
              </button>
            ))}
          </div>

          <Link
            to="/galeria"
            className="btn-stencil inline-flex w-full items-center justify-center gap-2 px-6 py-4 font-cinzel text-xs tracking-[0.28em]"
          >
            ENTRAR AL ARCHIVO
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeGallery;
