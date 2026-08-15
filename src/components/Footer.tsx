import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import BrandMark from "@/components/BrandMark";
import SocialLinks from "@/components/SocialLinks";

const Footer = () => {
  return (
    <footer id="contact" className="relative overflow-hidden border-t border-border bg-background py-16 md:py-20">
      <div className="absolute inset-0 ink-texture opacity-25" />
      <p className="pointer-events-none absolute -bottom-10 left-0 w-full text-center font-metal text-[22vw] leading-none text-primary/[0.035]">
        ANGELUX
      </p>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-12 grid gap-12 md:grid-cols-2 lg:grid-cols-3 lg:items-start">
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link to="/" className="mb-6 inline-block">
              <BrandMark className="h-28 w-auto sm:h-32 md:h-40" />
            </Link>
            <p className="mb-8 max-w-sm font-montserrat text-sm leading-relaxed text-muted-foreground">
              Tatuaje itinerante: a domicilio, en guest spots y en otras ciudades. El blackwork y el contraste son un fuerte del archivo.
            </p>
            <SocialLinks />
          </motion.div>

          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h4 className="mb-5 font-cinzel text-[11px] tracking-[0.3em] text-angelux-steel">NAVEGACIÓN</h4>
            <ul className="space-y-3">
              {[
                { name: "Inicio", path: "/" },
                { name: "Sobre mí", path: "/sobre-mi" },
                { name: "Galería", path: "/galeria" },
                { name: "Servicios", path: "/servicios" },
                { name: "Ruta", path: "/ruta" },
                { name: "Agendar", path: "/contacto" },
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
                  Estudio itinerante
                  <br />
                  Domicilio y guest spots
                </span>
              </li>
              <li className="flex items-center justify-center gap-3 lg:justify-start">
                <Phone className="h-4 w-4 shrink-0 text-angelux-steel" />
                <a href="tel:+525551234567" className="hover:text-primary">
                  +52 555 123 4567
                </a>
              </li>
              <li className="flex items-center justify-center gap-3 lg:justify-start">
                <Mail className="h-4 w-4 shrink-0 text-angelux-steel" />
                <a href="mailto:info@angeluxink.com" className="hover:text-primary">
                  info@angeluxink.com
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
