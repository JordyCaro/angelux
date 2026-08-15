import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import BrandMark from "@/components/BrandMark";

const navItems = [
  { name: "Inicio", path: "/", n: "01" },
  { name: "Servicios", path: "/servicios", n: "02" },
  { name: "Galería", path: "/galeria", n: "03" },
  { name: "Productos", path: "/productos", n: "04" },
  { name: "Estudio", path: "/instalaciones", n: "05" },
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

  const isActive = (path: string) => {
    if (path === "/" && location.pathname !== "/") return false;
    return location.pathname.startsWith(path);
  };

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled || location.pathname !== "/" || isOpen
          ? "border-b border-border/80 bg-background/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-[4.5rem] items-center justify-between">
          <Link to="/" className="group flex items-center gap-3">
            <BrandMark className="h-9 w-9 text-primary transition-transform duration-300 group-hover:rotate-45" />
            <span className="font-cinzel text-sm tracking-[0.28em]">
              ANGELUX<span className="ml-1 text-angelux-steel">INK</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
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
            className="p-2 text-foreground lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-[4.5rem] z-40 bg-background/98 backdrop-blur-xl lg:hidden"
          >
            <nav className="flex h-full flex-col justify-center gap-2 px-8">
              {navItems.map((item, index) => (
                <Link key={item.name} to={item.path} onClick={() => setIsOpen(false)}>
                  <motion.div
                    className={`flex items-baseline gap-4 border-b border-border/40 py-4 ${
                      isActive(item.path) ? "text-primary" : "text-muted-foreground"
                    }`}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <span className="font-cinzel text-[10px] tracking-[0.3em] text-angelux-steel">{item.n}</span>
                    <span className="font-metal text-4xl">{item.name}</span>
                  </motion.div>
                </Link>
              ))}
              <Link
                to="/contacto"
                onClick={() => setIsOpen(false)}
                className="btn-stencil mt-8 inline-flex w-fit px-6 py-3 font-cinzel text-xs tracking-[0.25em]"
              >
                AGENDAR CITA
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
