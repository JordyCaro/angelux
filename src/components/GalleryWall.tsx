import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, MapPin, X } from "lucide-react";
import { Link } from "react-router-dom";
import { galleryFilters, galleryItems, type GalleryItem } from "@/data/gallery";

const tilts = [-2.2, 1.6, -0.8, 2.4, -1.9, 0.7, 2.1, -1.4, 1.2, -2.6, 0.4, 1.8, -1.1, 2.8, -0.5, 1.3];
const heights = ["h-[340px]", "h-[420px]", "h-[300px]", "h-[480px]", "h-[360px]", "h-[400px]"];

const GalleryWall = () => {
  const [filter, setFilter] = useState<(typeof galleryFilters)[number]["value"]>("all");
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  const visible = useMemo(
    () => (filter === "all" ? galleryItems : galleryItems.filter((item) => item.zone === filter)),
    [filter],
  );

  const selectedIndex = selected ? visible.findIndex((item) => item.id === selected.id) : -1;

  const go = (dir: number) => {
    if (!visible.length) return;
    const next = (Math.max(selectedIndex, 0) + dir + visible.length) % visible.length;
    setSelected(visible[next]);
  };

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected, selectedIndex, visible]);

  return (
    <div className="relative min-h-screen bg-[#07080c]">
      <div className="shop-wall pointer-events-none absolute inset-0" />

      <header className="relative overflow-hidden border-b border-white/10 pt-28">
        <div className="relative z-10 flex flex-col items-center justify-between gap-8 px-4 pb-10 text-center md:flex-row md:items-end md:px-8 md:text-left">
          <div>
            <p className="ink-stamp mb-5 inline-block">MEDELLÍN · REALISMO</p>
            <h1 className="font-metal text-5xl tracking-wide text-primary sm:text-6xl md:text-8xl">
              ARCHIVO
              <span className="block text-2xl text-primary/60 sm:text-3xl md:text-5xl">piezas / {galleryItems.length}</span>
            </h1>
          </div>
          <p className="max-w-sm font-montserrat text-sm leading-relaxed text-muted-foreground">
            Piezas reales de Jonathan. El muro crece con más zonas, más sombra, más piel.
          </p>
        </div>

        <div className="relative z-10 flex justify-center gap-2 overflow-x-auto border-t border-white/10 px-4 py-3 md:justify-start md:px-8">
          {galleryFilters.map((tab) => (
            <button
              key={tab.value}
              type="button"
              onClick={() => setFilter(tab.value)}
              className={`shrink-0 px-4 py-2 font-cinzel text-[10px] tracking-[0.28em] ${
                filter === tab.value ? "bg-primary text-primary-foreground" : "ink-stamp-ghost"
              }`}
            >
              {tab.label}
            </button>
          ))}
          <span className="ml-auto hidden items-center font-cinzel text-[10px] tracking-[0.3em] text-muted-foreground md:flex">
            {visible.length} PIEZAS
          </span>
        </div>
      </header>

      <div className="relative columns-1 gap-5 p-4 sm:columns-2 md:p-8 lg:columns-3 xl:columns-4">
        {visible.map((item, index) => (
          <motion.button
            key={item.id}
            type="button"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: Math.min(index, 10) * 0.04 }}
            onClick={() => setSelected(item)}
            className="flash-card group mb-5 w-full break-inside-avoid text-left"
            style={{ transform: `rotate(${tilts[item.id % tilts.length]}deg)` }}
          >
            <div className={`relative overflow-hidden ${heights[item.id % heights.length]}`}>
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover contrast-110 transition duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.45))]" />
              <span className="ink-stamp absolute right-3 top-3 text-[9px]">{item.zoneLabel}</span>
              <div className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-black via-black/70 to-transparent p-4 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="font-cinzel text-[10px] tracking-[0.22em] text-angelux-steel">{item.styleLabel}</p>
                <p className="font-metal text-xl text-white">{item.title}</p>
              </div>
            </div>
            <div className="flex items-center justify-between px-1 pt-3">
              <p className="flex items-center gap-1 font-cinzel text-[9px] tracking-[0.18em] text-muted-foreground">
                <MapPin className="h-3 w-3" />
                {item.location}
              </p>
              <span className="font-cinzel text-[9px] tracking-[0.2em] text-white/30">OPEN</span>
            </div>
          </motion.button>
        ))}
      </div>

      <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 px-4 py-10 text-center md:flex-row md:items-center md:px-8 md:text-left">
        <p className="max-w-md font-montserrat text-sm text-muted-foreground">
          ¿Viste una pieza que te cala? La siguiente se tatuará en Medellín.
        </p>
        <Link to="/contacto" className="btn-stencil px-7 py-3.5 font-cinzel text-xs tracking-[0.24em]">
          TRAÉ TU PIEL
        </Link>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center overflow-y-auto bg-black/92 p-3 backdrop-blur-sm md:p-8"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 24, opacity: 0 }}
              className="relative my-auto grid max-h-[92vh] w-full max-w-6xl overflow-y-auto border border-white/15 bg-[#0a0b10] md:grid-cols-12 md:overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative min-h-[42vh] md:col-span-8 md:min-h-[82vh]">
                <img src={selected.image} alt={selected.title} className="absolute inset-0 h-full w-full object-cover" />
                <button
                  type="button"
                  className="absolute left-3 top-1/2 -translate-y-1/2 border border-white/20 bg-black/50 p-2 hover:border-primary"
                  onClick={() => go(-1)}
                  aria-label="Anterior"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 border border-white/20 bg-black/50 p-2 hover:border-primary"
                  onClick={() => go(1)}
                  aria-label="Siguiente"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
              <div className="flex flex-col justify-between p-6 md:col-span-4 md:p-8">
                <div>
                  <p className="ink-stamp inline-block">{selected.zoneLabel}</p>
                  <p className="mt-6 font-cinzel text-[10px] tracking-[0.35em] text-angelux-steel">
                    {selected.styleLabel}
                  </p>
                  <h3 className="mt-3 font-metal text-3xl text-primary md:text-4xl">{selected.title}</h3>
                  <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 text-angelux-steel" />
                    {selected.location}
                  </p>
                </div>
                <Link to="/contacto" className="btn-stencil mt-8 inline-flex w-fit px-5 py-3 font-cinzel text-[11px] tracking-[0.22em]">
                  PEDIR UNA PIEZA ASÍ
                </Link>
              </div>
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="absolute right-3 top-3 border border-white/20 bg-black/60 p-2"
                aria-label="Cerrar"
              >
                <X className="h-5 w-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryWall;
