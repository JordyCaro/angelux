import { motion } from "framer-motion";
import { ReactNode } from "react";
import GeometryCorners from "./GeometryCorners";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  children?: ReactNode;
}

const PageHero = ({ title, subtitle, description, children }: PageHeroProps) => {
  return (
    <section className="relative flex min-h-[48vh] items-end overflow-hidden ink-texture pb-12 pt-24 sm:min-h-[58vh] sm:pb-16 sm:pt-28">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 60%, hsl(var(--angelux-blue)) 0%, transparent 42%)",
            "radial-gradient(circle at 80% 40%, hsl(var(--angelux-steel)) 0%, transparent 42%)",
            "radial-gradient(circle at 20% 60%, hsl(var(--angelux-blue)) 0%, transparent 42%)",
          ],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
      />
      <GeometryCorners />
      <p className="pointer-events-none absolute right-6 top-24 font-metal text-[28vw] leading-none text-primary/[0.04] md:text-[10rem]">
        {title.slice(0, 3)}
      </p>

      <div className="relative z-10 container mx-auto px-4">
        <motion.p
          className="mb-4 font-cinzel text-[11px] tracking-[0.4em] text-angelux-steel"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
        >
          ANGELUX INK
        </motion.p>
        <motion.h1
          className="font-metal text-4xl tracking-wide text-primary sm:text-5xl md:text-7xl"
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15 }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            className="mt-4 font-cinzel text-xs tracking-[0.3em] text-muted-foreground md:text-sm"
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {subtitle}
          </motion.p>
        )}
        {description && (
          <motion.p
            className="mt-6 max-w-xl font-montserrat text-base text-muted-foreground/85"
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.45 }}
          >
            {description}
          </motion.p>
        )}
        {children}
      </div>
    </section>
  );
};

export default PageHero;
