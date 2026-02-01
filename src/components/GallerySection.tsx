import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const galleryImages = {
  blackwork: [
    { id: 1, title: "Skull Mandala", artist: "Alex Ink" },
    { id: 2, title: "Dark Forest", artist: "Maria Shadow" },
    { id: 3, title: "Serpent", artist: "Alex Ink" },
    { id: 4, title: "Raven", artist: "Carlos Black" },
    { id: 5, title: "Geometric Wolf", artist: "Maria Shadow" },
    { id: 6, title: "Sacred Geometry", artist: "Carlos Black" },
  ],
  dotwork: [
    { id: 7, title: "Mandala Full Sleeve", artist: "Maria Shadow" },
    { id: 8, title: "Dot Skull", artist: "Alex Ink" },
    { id: 9, title: "Cosmic Eye", artist: "Carlos Black" },
    { id: 10, title: "Geometric Pattern", artist: "Maria Shadow" },
  ],
  piercing: [
    { id: 11, title: "Industrial Setup", artist: "Luna Pierce" },
    { id: 12, title: "Septum Gold", artist: "Luna Pierce" },
    { id: 13, title: "Helix Collection", artist: "Luna Pierce" },
    { id: 14, title: "Medusa Diamond", artist: "Luna Pierce" },
  ],
};

const GalleryImage = ({ image, index, onClick }: { 
  image: typeof galleryImages.blackwork[0]; 
  index: number;
  onClick: () => void;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
      onClick={onClick}
    >
      {/* Placeholder image with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-muted to-secondary" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-gothic text-4xl text-muted-foreground/30">{image.id}</span>
      </div>
      
      {/* Hover overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <ZoomIn className="w-8 h-8 text-foreground mb-3" />
          <h4 className="font-metal text-lg text-foreground">{image.title}</h4>
          <p className="font-cinzel text-xs text-muted-foreground tracking-wider">by {image.artist}</p>
        </div>
      </motion.div>

      {/* Border effect on hover */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 transition-colors duration-300 rounded-lg" />
    </motion.div>
  );
};

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages.blackwork[0] | null>(null);
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true });

  return (
    <section id="gallery" className="py-24 relative overflow-hidden bg-card/30">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <motion.div
          ref={titleRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-metal text-4xl md:text-6xl lg:text-7xl mb-4 text-primary">
            Nuestra Galería
          </h2>
          <p className="font-cinzel text-sm tracking-[0.3em] text-muted-foreground uppercase">
            Obras que hablan por sí solas
          </p>
        </motion.div>

        {/* Gallery Tabs */}
        <Tabs defaultValue="blackwork" className="w-full">
          <TabsList className="flex justify-center gap-2 bg-transparent mb-12 flex-wrap">
            {[
              { value: "blackwork", label: "Blackwork" },
              { value: "dotwork", label: "Dotwork" },
              { value: "piercing", label: "Piercings" },
            ].map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="font-cinzel tracking-wider text-sm px-6 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full border border-border data-[state=active]:border-primary transition-all duration-300"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(galleryImages).map(([key, images]) => (
            <TabsContent key={key} value={key}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
              >
                {images.map((image, index) => (
                  <GalleryImage
                    key={image.id}
                    image={image}
                    index={index}
                    onClick={() => setSelectedImage(image)}
                  />
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-lg flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl w-full aspect-square bg-card rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary via-muted to-secondary flex items-center justify-center">
                <span className="font-gothic text-8xl text-muted-foreground/30">{selectedImage.id}</span>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background to-transparent">
                <h3 className="font-metal text-2xl">{selectedImage.title}</h3>
                <p className="font-cinzel text-muted-foreground">by {selectedImage.artist}</p>
              </div>

              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 bg-background/50 rounded-full hover:bg-background transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
