import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import AboutSection from "@/components/AboutSection";
import GalleryFilmstrip from "@/components/GalleryFilmstrip";
import FaqSection from "@/components/FaqSection";
import BookingSection from "@/components/BookingSection";
import { Link } from "react-router-dom";
import { aboutCraftImage, aboutExtended, aboutHeroImage, aboutProcess } from "@/data/about";

const About = () => {
  return (
    <PageLayout>
      <section className="relative flex min-h-[78svh] flex-col overflow-hidden">
        <img
          src={aboutHeroImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[center_20%] contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-background/50" />
        <div className="absolute inset-0 ink-texture opacity-50" />

        <div className="relative z-10 flex flex-1 flex-col justify-end px-4 pb-16 pt-32 text-center md:px-10 md:pb-20 md:text-left lg:px-16">
          <motion.p
            className="font-cinzel text-[11px] tracking-[0.4em] text-angelux-steel"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            JONATHAN · ANGELUX INK
          </motion.p>
          <motion.h1
            className="mt-4 font-metal leading-[0.86] tracking-wide text-primary"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.8 }}
          >
            <span className="block text-6xl sm:text-8xl md:text-[9rem]">Sobre mí</span>
          </motion.h1>
          <motion.p
            className="mx-auto mt-6 max-w-xl font-montserrat text-base leading-relaxed text-muted-foreground md:mx-0 md:text-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28 }}
          >
            Si la piel va a hablar, que hable fuerte. Realismo y sombras en Medellín: cada pieza se construye, no se copia.
          </motion.p>
        </div>
      </section>

      <AboutSection variant="page" />

      <section className="relative overflow-hidden border-b border-border py-24 md:py-32">
        <div className="absolute inset-0 ink-texture opacity-30" />

        <div className="container relative z-10 mx-auto grid items-center gap-12 px-4 text-center lg:grid-cols-12 lg:text-left">
          <div className="lg:col-span-7">
            <p className="font-cinzel text-[11px] tracking-[0.4em] text-angelux-steel">PRIMERA PERSONA</p>
            <h2 className="mt-4 font-metal text-4xl text-primary sm:text-5xl md:text-7xl">
              {aboutExtended.headline}
            </h2>
            <div className="mt-8 mx-auto max-w-xl space-y-4 font-montserrat text-sm leading-relaxed text-muted-foreground lg:mx-0 md:text-base">
              {aboutExtended.paragraphs.map((p) => (
                <p key={p.slice(0, 28)}>{p}</p>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="flash-card mx-auto max-w-md rotate-1 lg:mx-0 lg:max-w-none">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={aboutCraftImage}
                  alt="Oficio Angelux Ink"
                  className="h-full w-full object-cover contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
                <span className="ink-stamp absolute left-4 top-4">EL OFICIO</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card/20 py-24 md:py-32">
        <div className="container mx-auto px-4 text-center md:text-left">
          <p className="mb-4 font-cinzel text-[11px] tracking-[0.4em] text-angelux-steel">CÓMO TRABAJO</p>
          <div className="mb-14 flex flex-col items-center justify-between gap-6 md:flex-row md:items-end">
            <h2 className="font-metal text-4xl text-primary md:text-6xl">La sombra no se improvisa</h2>
            <p className="max-w-sm font-montserrat text-sm leading-relaxed text-muted-foreground">
              Tiempo, trazo y una sesión que se siente tuya. Referencias, idea, zona del cuerpo: lo armamos juntos hasta que el realismo encaje.
            </p>
          </div>

          <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {aboutProcess.map((item) => (
              <article key={item.t} className="bg-background p-6 text-center md:p-8 md:text-left">
                <h3 className="font-metal text-3xl text-primary">{item.t}</h3>
                <div className="mx-auto my-5 h-px w-12 bg-angelux-steel/60 md:mx-0" />
                <p className="font-montserrat text-sm leading-relaxed text-muted-foreground">{item.d}</p>
              </article>
            ))}
          </div>

          <Link
            to="/galeria"
            className="mt-12 inline-flex justify-center font-cinzel text-xs tracking-[0.28em] text-angelux-steel hover:text-primary md:justify-start"
          >
            VER GALERÍA →
          </Link>
        </div>
      </section>

      <GalleryFilmstrip />
      <FaqSection compact />
      <BookingSection />
    </PageLayout>
  );
};

export default About;
