import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import BrandMark from "@/components/BrandMark";
import SocialLinks from "@/components/SocialLinks";
import { ChannelCta } from "@/components/WhatsAppCta";
import { phoneDisplay, whatsappUrl } from "@/data/copy";

const Footer = () => {
  return (
    <footer id="contact" className="relative overflow-hidden border-t border-border bg-background py-10 md:py-12">
      <div className="absolute inset-0 ink-texture opacity-25" />
      <p
        aria-hidden
        className="pointer-events-none absolute -bottom-8 left-0 hidden w-full select-none text-center font-metal text-[8rem] leading-none text-primary/[0.06] lg:block xl:text-[10rem]"
      >
        ANGELUX
      </p>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:items-start">
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link to="/" className="mb-4 inline-block">
              <BrandMark className="h-20 w-auto sm:h-24 md:h-28" />
            </Link>
            <p className="mb-8 max-w-sm font-montserrat text-sm leading-relaxed text-muted-foreground">
              Tatuaje en Medellín. Realismo y sombras. No copiamos de Pinterest: cada pieza se construye desde cero.
            </p>
            <SocialLinks className="justify-center" />
            <ChannelCta className="mt-5 w-full max-w-xs py-3" />
          </motion.div>

          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h4 className="mb-5 font-cinzel text-[11px] tracking-[0.3em] text-angelux-steel">NAVEGACIÓN</h4>
            <ul className="space-y-3">
              {[
                { name: "Inicio", path: "/" },
                { name: "Sobre mí", path: "/sobre-mi" },
                { name: "Galería", path: "/galeria" },
                { name: "Servicios", path: "/servicios" },
                { name: "Estudio", path: "/estudio" },
                { name: "Contacto", path: "/contacto" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="font-montserrat text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center text-center md:col-span-2 lg:col-span-1 lg:items-start lg:text-left">
            <h4 className="mb-5 font-cinzel text-[11px] tracking-[0.3em] text-angelux-steel">CONTACTO</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start justify-center gap-3 lg:justify-start">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-angelux-steel" />
                <span>
                  Estudio privado en Medellín
                  <br />
                  Cita previa · Realismo en sombras
                </span>
              </li>
              <li className="flex items-center justify-center gap-3 lg:justify-start">
                <Phone className="h-4 w-4 shrink-0 text-angelux-steel" />
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                  {phoneDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="font-cinzel text-[10px] tracking-[0.2em] text-muted-foreground">
            © 2026 ANGELUX INK — Hecho por{" "}
            <a
              href="https://nemco-net.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline-offset-4 transition-colors hover:text-angelux-steel hover:underline"
            >
              nemco net
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
