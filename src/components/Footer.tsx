import { motion } from "framer-motion";
import { Skull, Instagram, Facebook, MapPin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="contact" className="relative py-16 bg-card/50 border-t border-border overflow-hidden">
      {/* Ink texture overlay */}
      <div className="absolute inset-0 ink-texture opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a href="#hero" className="flex items-center gap-3 group mb-6">
              <Skull className="w-10 h-10 text-primary group-hover:animate-pulse" />
              <span className="font-metal text-xl tracking-wider">
                SDARCK<span className="text-primary/70">TATTOO</span>
              </span>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-montserrat">
              Diseñamos piezas personalizadas y experiencias diferenciadas, pensadas para quienes valoran el arte, el detalle y la calidad.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-metal text-lg mb-6">Navegación</h4>
            <ul className="space-y-3">
              {[
                { name: "Inicio", path: "/" },
                { name: "Servicios", path: "/servicios" },
                { name: "Galería", path: "/galeria" },
                { name: "Productos", path: "/productos" },
                { name: "Instalaciones", path: "/instalaciones" },
                { name: "Agendar Cita", path: "/contacto" }
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="font-montserrat text-sm text-muted-foreground hover:text-primary transition-colors tracking-wider"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-metal text-lg mb-6">Servicios</h4>
            <ul className="space-y-3">
              {["Tatuajes Blackwork", "Tatuajes Dotwork", "Perforaciones", "Productos Profesionales", "Aftercare", "Asesoría"].map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="font-montserrat text-sm text-muted-foreground hover:text-primary transition-colors tracking-wider"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-metal text-lg mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="font-montserrat text-sm text-muted-foreground tracking-wider">
                  Tu ubicación<br />
                  Ciudad, País
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+525551234567" className="font-montserrat text-sm text-muted-foreground hover:text-primary transition-colors tracking-wider">
                  +52 555 123 4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:info@sdarcktattoo.com" className="font-montserrat text-sm text-muted-foreground hover:text-primary transition-colors tracking-wider">
                  info@sdarcktattoo.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="font-montserrat text-xs text-muted-foreground tracking-wider">
            © 2024 SDARCK TATTOO. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-montserrat text-xs text-muted-foreground hover:text-primary transition-colors tracking-wider">
              Política de Privacidad
            </a>
            <a href="#" className="font-montserrat text-xs text-muted-foreground hover:text-primary transition-colors tracking-wider">
              Términos de Servicio
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
