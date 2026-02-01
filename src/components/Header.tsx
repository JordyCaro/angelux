import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Skull } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "Inicio", path: "/" },
  { name: "Servicios", path: "/servicios" },
  { name: "Galería", path: "/galeria" },
  { name: "Productos", path: "/productos" },
  { name: "Instalaciones", path: "/instalaciones" },
  { name: "Contacto", path: "/contacto" },
];

// Brand values from manual
const brandValues = {
  name: "SDARCK TATTOO",
  tagline: "S de Stiven + Dark",
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper to check if link is active
  const isActive = (path: string) => {
    if (path === "/" && location.pathname !== "/") return false;
    return location.pathname.startsWith(path);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled || location.pathname !== "/"
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/">
            <motion.div
              className="flex items-center gap-3 group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Skull className="w-10 h-10 text-primary group-hover:animate-pulse" />
              <span className="font-metal text-xl md:text-2xl tracking-wider">
                SDARCK<span className="text-primary/70">TATTOO</span>
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <Link key={item.name} to={item.path}>
                <motion.div
                  className={`font-cinzel text-sm tracking-widest uppercase transition-colors relative group ${isActive(item.path) ? "text-primary" : "text-muted-foreground hover:text-foreground"
                    }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${isActive(item.path) ? "w-full" : "w-0 group-hover:w-full"
                    }`} />
                </motion.div>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="hidden lg:block"
          >
            <Button
              className="font-cinzel tracking-wider bg-primary text-primary-foreground hover:bg-primary/80"
              asChild
            >
              <Link to="/contacto">AGENDAR CITA</Link>
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/98 backdrop-blur-lg border-b border-border"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navItems.map((item, index) => (
                <Link key={item.name} to={item.path} onClick={() => setIsOpen(false)}>
                  <motion.div
                    className={`font-cinzel text-lg tracking-widest uppercase transition-colors py-2 border-b border-border/50 ${isActive(item.path) ? "text-primary" : "text-muted-foreground hover:text-foreground"
                      }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {item.name}
                  </motion.div>
                </Link>
              ))}
              <Button
                className="font-cinzel tracking-wider bg-primary text-primary-foreground hover:bg-primary/80 mt-4"
                asChild
              >
                <Link to="/contacto" onClick={() => setIsOpen(false)}>AGENDAR CITA</Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
