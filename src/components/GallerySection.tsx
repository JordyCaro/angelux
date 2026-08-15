import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const galleryImages = {
  blackwork: [
    { id: 1, title: "Mandala en tinta", artist: "Angelux Ink", span: "lg:col-span-2 lg:row-span-2" },
    { id: 2, title: "Bosque oscuro", artist: "Angelux Ink", span: "" },
    { id: 3, title: "Serpiente", artist: "Angelux Ink", span: "" },
    { id: 4, title: "Cuervo", artist: "Angelux Ink", span: "lg:col-span-2" },
    { id: 5, title: "Lobo geométrico", artist: "Angelux Ink", span: "" },
    { id: 6, title: "Geometría sagrada", artist: "Angelux Ink", span: "" },
  ],
  grey: [
    { id: 7, title: "Retrato en sombra", artist: "Angelux Ink", span: "lg:col-span-2" },
    { id: 8, title: "Manga black & grey", artist: "Angelux Ink", span: "" },
    { id: 9, title: "Ojo cósmico", artist: "Angelux Ink", span: "" },
    { id: 10, title: "Realismo floral", artist: "Angelux Ink", span: "lg:col-span-2" },
  ],
  piercing: [
    { id: 11, title: "Industrial", artist: "Angelux Ink", span: "" },
    { id: 12, title: "Septum", artist: "Angelux Ink", span: "" },
    { id: 13, title: "Helix", artist: "Angelux Ink", span: "" },
    { id: 14, title: "Medusa", artist: "Angelux Ink", span: "" },
  ],
};

type GalleryItem = (typeof galleryImages.blackwork)[0];

const GalleryImage = ({
  image,
  index,
  onClick,
}: {
  image: GalleryItem;
  index: number;
  onClick: () => void;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.button
      type="button"
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.07 }}
      className={`group relative min-h-[220px] overflow-hidden text-left ${image.span || ""} ${
        image.span.includes("row-span") ? "min-h-[460px]" : ""
      }`}
      onClick={onClick}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(145deg, hsl(220 30% ${12 + (image.id % 5) * 3}%) 0%, hsl(215 40% 8%) 50%, hsl(222 47% 5%) 100%)`,
        }}
      />
      <div className="absolute inset-0 opacity-30 mix-blend-overlay ink-texture" />
      <div className="absolute inset-3 border border-white/5 transition-colors duration-500 group-hover:border-angelux-steel/50" />

      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-metal text-6xl text-white/10">{String(image.id).padStart(2, "0")}</span>
      </div>

      <div className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-background via-background/70 to-transparent p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        <p className="font-cinzel text-[10px] tracking-[0.28em] text-angelux-steel">ARCHIVO</p>
        <h4 className="mt-1 font-metal text-xl text-foreground">{image.title}</h4>
      </div>
    </motion.button>
  );
};

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true });

  return (
    <section id="gallery" className="relative overflow-hidden border-y border-border bg-card/20 py-24">
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          ref={titleRef}
          className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <div>
            <p className="mb-3 font-cinzel text-[11px] tracking-[0.4em] text-angelux-steel">ARCHIVO</p>
            <h2 className="font-metal text-4xl text-primary md:text-6xl">Galería</h2>
          </div>
          <p className="max-w-xs font-montserrat text-sm text-muted-foreground">
            Piezas en tinta negra. El color no entra en esta sala.
          </p>
        </motion.div>

        <Tabs defaultValue="blackwork" className="w-full">
          <TabsList className="mb-10 h-auto w-full justify-start gap-0 rounded-none border-b border-border bg-transparent p-0">
            {[
              { value: "blackwork", label: "Blackwork" },
              { value: "grey", label: "Black & Grey" },
              { value: "piercing", label: "Piercings" },
            ].map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="rounded-none border-b-2 border-transparent bg-transparent px-5 py-3 font-cinzel text-xs tracking-[0.22em] text-muted-foreground shadow-none data-[state=active]:border-angelux-steel data-[state=active]:bg-transparent data-[state=active]:text-primary"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(galleryImages).map(([key, images]) => (
            <TabsContent key={key} value={key}>
              <div className="grid grid-cols-2 gap-2 lg:grid-cols-4 lg:grid-rows-2">
                {images.map((image, index) => (
                  <GalleryImage
                    key={image.id}
                    image={image}
                    index={index}
                    onClick={() => setSelectedImage(image)}
                  />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 p-4 backdrop-blur-lg"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              className="relative aspect-square w-full max-w-3xl overflow-hidden border border-angelux-steel/30"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary via-muted to-background" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-metal text-8xl text-muted-foreground/20">
                  {String(selectedImage.id).padStart(2, "0")}
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-metal text-2xl">{selectedImage.title}</h3>
                <p className="font-cinzel text-xs tracking-[0.2em] text-muted-foreground">{selectedImage.artist}</p>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute right-4 top-4 border border-border p-2 hover:border-primary"
                aria-label="Cerrar"
              >
                <X className="h-5 w-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
