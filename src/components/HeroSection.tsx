import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import InkBackground from "./InkBackground";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden ink-texture"
    >
      {/* New Ink/Smoke Background Effect */}
      <InkBackground />

      {/* Background gradient overlay - Deep black to fade edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background" />

      {/* Subtle green glow animation */}
      <motion.div
        className="absolute inset-0 opacity-20 pointer-events-none"
        animate={{
          background: [
            "radial-gradient(circle at 30% 50%, hsl(var(--sdarck-green)) 0%, transparent 40%)",
            "radial-gradient(circle at 70% 50%, hsl(var(--sdarck-green)) 0%, transparent 40%)",
            "radial-gradient(circle at 50% 70%, hsl(var(--sdarck-green)) 0%, transparent 40%)",
            "radial-gradient(circle at 30% 50%, hsl(var(--sdarck-green)) 0%, transparent 40%)",
          ]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Main title - SDARCK TATTOO */}
          <motion.h1
            className="font-metal text-5xl md:text-7xl lg:text-9xl mb-4 tracking-wide"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="block text-primary drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">SDARCK</span>
            <span className="block text-primary/80 text-4xl md:text-5xl lg:text-7xl">TATTOO</span>
          </motion.h1>

          {/* Tagline - Brand values */}
          <motion.p
            className="font-cinzel text-sm md:text-base text-muted-foreground tracking-[0.3em] uppercase mb-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Autenticidad • Elegancia • Exclusividad
          </motion.p>

          {/* Subtitle */}
          <motion.p
            className="font-montserrat text-lg md:text-xl text-muted-foreground/80 max-w-xl mx-auto mb-12"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Diseñamos piezas personalizadas y experiencias diferenciadas para quienes valoran el arte, el detalle y la calidad.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <Button
              size="lg"
              className="font-cinzel tracking-wider text-lg px-8 py-6 bg-primary hover:bg-primary/80 text-primary-foreground"
              asChild
            >
              <Link to="/contacto">RESERVA TU CITA</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="font-cinzel tracking-wider text-lg px-8 py-6 border-primary/30 hover:bg-primary/10"
              asChild
            >
              <Link to="/galeria">VER GALERÍA</Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-muted-foreground" />
        </motion.div>
      </div>

      {/* Decorative corner elements with brand style */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-primary/20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-primary/20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-primary/20 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-primary/20 pointer-events-none" />
    </section>
  );
};

export default HeroSection;
