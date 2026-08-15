import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import BrandMark from "@/components/BrandMark";
import SocialLinks from "@/components/SocialLinks";

const navItems = [
  { name: "Inicio", path: "/", n: "01" },
  { name: "Sobre mí", path: "/sobre-mi", n: "02" },
  { name: "Galería", path: "/galeria", n: "03" },
  { name: "Servicios", path: "/servicios", n: "04" },
  { name: "Ruta", path: "/ruta", n: "05" },
  { name: "Contacto", path: "/contacto", n: "06" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const isActive = (path: string) => {
    if (path === "/" && location.pathname !== "/") return false;
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-[60] transition-all duration-500 ${
          scrolled || location.pathname !== "/" || isOpen
            ? "border-b border-border/80 bg-background"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between md:h-20">
            <Link to="/" className="group flex items-center" onClick={() => setIsOpen(false)}>
              <BrandMark className="h-10 w-auto transition-transform duration-300 group-hover:scale-105 md:h-14" />
            </Link>

            <nav className="hidden items-center gap-5 lg:flex xl:gap-7">
              {navItems.map((item) => (
                <Link key={item.name} to={item.path} className="group relative">
                  <span
                    className={`font-cinzel text-[11px] tracking-[0.22em] uppercase transition-colors ${
                      isActive(item.path) ? "text-primary" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.name}
                  </span>
                  <span
                    className={`absolute -bottom-2 left-0 h-px bg-angelux-steel transition-all duration-300 ${
                      isActive(item.path) ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ))}
            </nav>

            <Link
              to="/contacto"
              className="btn-stencil hidden px-5 py-2.5 font-cinzel text-[11px] tracking-[0.22em] lg:inline-flex"
            >
              AGENDAR
            </Link>

            <button
              className="relative z-[61] p-2 text-foreground lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col bg-black lg:hidden"
          >
            <div className="h-16 shrink-0 md:h-20" />
            <nav className="flex min-h-0 flex-1 flex-col items-center justify-center overflow-y-auto px-6 py-6 text-center">
              {navItems.map((item, index) => (
                <Link key={item.name} to={item.path} onClick={() => setIsOpen(false)} className="w-full max-w-xs">
                  <motion.div
                    className={`flex items-baseline justify-center gap-3 border-b border-white/10 py-3.5 ${
                      isActive(item.path) ? "text-primary" : "text-muted-foreground"
                    }`}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <span className="font-cinzel text-[10px] tracking-[0.3em] text-angelux-steel">{item.n}</span>
                    <span className="font-metal text-3xl sm:text-4xl">{item.name}</span>
                  </motion.div>
                </Link>
              ))}
              <Link
                to="/contacto"
                onClick={() => setIsOpen(false)}
                className="btn-stencil mt-8 inline-flex px-8 py-3 font-cinzel text-xs tracking-[0.25em]"
              >
                AGENDAR CITA
              </Link>
              <div className="mt-8 flex justify-center">
                <SocialLinks className="justify-center" />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
