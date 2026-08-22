import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import BrandMark from "@/components/BrandMark";
import SocialLinks from "@/components/SocialLinks";

const leftNav = [
  { name: "Inicio", path: "/" },
  { name: "Sobre mí", path: "/sobre-mi" },
  { name: "Galería", path: "/galeria" },
];

const rightNav = [
  { name: "Servicios", path: "/servicios" },
  { name: "Estudio", path: "/estudio" },
  { name: "Contacto", path: "/contacto" },
];

const navItems = [...leftNav, ...rightNav];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setScrolled(window.scrollY > 40);
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

  const NavLink = ({ item }: { item: (typeof navItems)[number] }) => (
    <Link to={item.path} className="group relative shrink-0">
      <span
        className={`font-cinzel text-sm tracking-[0.16em] uppercase transition-colors xl:text-base ${
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
  );

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-[60] border-b transition-all duration-500 ${
          isOpen || scrolled
            ? "border-white/10 bg-background/40 backdrop-blur-2xl backdrop-saturate-150"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="relative mx-auto flex h-20 max-w-6xl items-center justify-center px-4 md:h-24 lg:gap-8 xl:gap-10">
          <nav className="hidden items-center gap-8 lg:flex xl:gap-10">
            {leftNav.map((item) => (
              <NavLink key={item.name} item={item} />
            ))}
          </nav>

          <Link to="/" className="group shrink-0 lg:px-2" onClick={() => setIsOpen(false)}>
            <BrandMark className="h-16 w-auto transition-transform duration-300 group-hover:scale-105 md:h-[4.75rem] lg:h-20" />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex xl:gap-10">
            {rightNav.map((item) => (
              <NavLink key={item.name} item={item} />
            ))}
          </nav>

          <button
            className="absolute right-4 z-[61] p-2 text-foreground lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
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
            <div className="h-20 shrink-0 md:h-24" />
            <nav className="flex min-h-0 flex-1 flex-col items-center justify-center overflow-y-auto px-6 py-6 text-center">
              {navItems.map((item, index) => (
                <Link key={item.name} to={item.path} onClick={() => setIsOpen(false)} className="w-full max-w-xs">
                  <motion.div
                    className={`border-b border-white/10 py-3.5 font-metal text-3xl sm:text-4xl ${
                      isActive(item.path) ? "text-primary" : "text-muted-foreground"
                    }`}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {item.name}
                  </motion.div>
                </Link>
              ))}
              <div className="mt-10 flex justify-center">
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
