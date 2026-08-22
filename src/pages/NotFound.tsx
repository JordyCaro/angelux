import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen items-center overflow-hidden bg-background px-6">
      <div className="relative z-10 mx-auto max-w-xl text-center">
        <p className="mb-4 font-cinzel text-[11px] tracking-[0.4em] text-angelux-steel">ERROR / RUTA PERDIDA</p>
        <h1 className="font-metal text-7xl text-primary">404</h1>
        <p className="mt-4 font-montserrat text-muted-foreground">Esta página no existe en el archivo de Angelux Ink.</p>
        <Link to="/" className="btn-stencil mt-8 inline-flex px-6 py-3 font-cinzel text-xs tracking-[0.22em]">
          VOLVER AL INICIO
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
