import { motion } from "framer-motion";
import { Instagram, Facebook, MapPin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import BrandMark from "@/components/BrandMark";

const Footer = () => {
  return (
    <footer id="contact" className="relative overflow-hidden border-t border-border bg-background py-20">
      <div className="absolute inset-0 ink-texture opacity-25" />
      <p className="pointer-events-none absolute -bottom-10 left-0 font-metal text-[22vw] leading-none text-primary/[0.035]">
        ANGELUX
      </p>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-16 grid gap-12 lg:grid-cols-12">
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link to="/" className="mb-6 flex items-center gap-3">
              <BrandMark className="h-10 w-10 text-primary" />
              <span className="font-cinzel text-sm tracking-[0.28em]">
                ANGELUX<span className="ml-1 text-angelux-steel">INK</span>
              </span>
            </Link>
            <p className="mb-8 max-w-sm font-montserrat text-sm leading-relaxed text-muted-foreground">
              Estudio de tatuaje en blanco y negro. Blackwork, black & grey y realismo — con detalle, sombra y carácter.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center border border-border transition-colors hover:border-angelux-steel hover:text-primary"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center border border-border transition-colors hover:border-angelux-steel hover:text-primary"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-7">
            <div>
              <h4 className="mb-5 font-cinzel text-[11px] tracking-[0.3em] text-angelux-steel">NAVEGACIÓN</h4>
              <ul className="space-y-3">
                {[
                  { name: "Inicio", path: "/" },
                  { name: "Servicios", path: "/servicios" },
                  { name: "Galería", path: "/galeria" },
                  { name: "Productos", path: "/productos" },
                  { name: "Estudio", path: "/instalaciones" },
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

            <div>
              <h4 className="mb-5 font-cinzel text-[11px] tracking-[0.3em] text-angelux-steel">OFICIO</h4>
              <ul className="space-y-3">
                {["Blackwork", "Black & Grey", "Realismo", "Fineline", "Aftercare"].map((item) => (
                  <li key={item}>
                    <Link
                      to="/servicios"
                      className="font-montserrat text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-5 font-cinzel text-[11px] tracking-[0.3em] text-angelux-steel">CONTACTO</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-angelux-steel" />
                  <span>
                    Tu ubicación
                    <br />
                    Ciudad, País
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 shrink-0 text-angelux-steel" />
                  <a href="tel:+525551234567" className="hover:text-primary">
                    +52 555 123 4567
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 shrink-0 text-angelux-steel" />
                  <a href="mailto:info@angeluxink.com" className="hover:text-primary">
                    info@angeluxink.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 border-t border-border pt-8 md:flex-row md:items-center">
          <p className="font-cinzel text-[10px] tracking-[0.2em] text-muted-foreground">
            © 2026 ANGELUX INK — TODOS LOS DERECHOS RESERVADOS
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-cinzel text-[10px] tracking-[0.2em] text-muted-foreground hover:text-primary">
              PRIVACIDAD
            </a>
            <a href="#" className="font-cinzel text-[10px] tracking-[0.2em] text-muted-foreground hover:text-primary">
              TÉRMINOS
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
