import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShoppingBag, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const products = [
  {
    id: 1,
    name: "Dynamic Black Ink",
    category: "Tintas",
    price: "$45.00",
    rating: 5,
    bestseller: true,
  },
  {
    id: 2,
    name: "Cheyenne Hawk Pen",
    category: "Máquinas",
    price: "$380.00",
    rating: 5,
    bestseller: true,
  },
  {
    id: 3,
    name: "Camilla Hidráulica Pro",
    category: "Mobiliario",
    price: "$650.00",
    rating: 4,
    bestseller: false,
  },
  {
    id: 4,
    name: "Aftercare Cream Set",
    category: "Cuidados",
    price: "$35.00",
    rating: 5,
    bestseller: true,
  },
  {
    id: 5,
    name: "Agujas RL Premium",
    category: "Agujas",
    price: "$25.00",
    rating: 4,
    bestseller: false,
  },
  {
    id: 6,
    name: "Grip Ergonómico",
    category: "Accesorios",
    price: "$45.00",
    rating: 5,
    bestseller: false,
  },
];

const ProductCard = ({ product, index }: { product: typeof products[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="group relative bg-card/50 border-border hover:border-primary/30 transition-all duration-500 overflow-hidden h-full">
        {/* Bestseller badge */}
        {product.bestseller && (
          <div className="absolute top-4 right-4 z-10">
            <span className="font-cinzel text-[10px] tracking-wider px-3 py-1 bg-primary text-primary-foreground rounded-full">
              BESTSELLER
            </span>
          </div>
        )}

        {/* Product image placeholder */}
        <div className="aspect-square bg-gradient-to-br from-secondary via-muted to-secondary relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <ShoppingBag className="w-16 h-16 text-muted-foreground/20" />
          </div>
          
          {/* Quick add button */}
          <motion.div
            className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={false}
          >
            <Button 
              className="w-full font-cinzel tracking-wider bg-foreground text-background hover:bg-accent hover:text-accent-foreground"
              size="sm"
            >
              Añadir al carrito
            </Button>
          </motion.div>
        </div>

        <CardContent className="p-5">
          {/* Category */}
          <p className="font-cinzel text-[10px] tracking-[0.2em] text-primary uppercase mb-2">
            {product.category}
          </p>

          {/* Name */}
          <h3 className="font-metal text-lg mb-2 group-hover:text-primary transition-colors duration-300">
            {product.name}
          </h3>

          <div className="flex gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${i < product.rating ? "fill-primary text-primary" : "text-muted-foreground"}`}
              />
            ))}
          </div>

          {/* Price */}
          <p className="font-cinzel text-xl font-semibold">{product.price}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const ProductsSection = () => {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true });

  return (
    <section id="products" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 ink-texture opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={titleRef}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h2 className="font-metal text-4xl md:text-6xl lg:text-7xl mb-4 text-primary">
              Nuestra Tienda
            </h2>
            <p className="font-cinzel text-sm tracking-[0.3em] text-muted-foreground uppercase">
              Productos profesionales para tatuadores
            </p>
          </div>

          <Button 
            variant="outline" 
            className="font-cinzel tracking-wider border-foreground/30 hover:bg-foreground/10 group self-start md:self-auto"
            asChild
          >
            <a href="#shop">
              Ver todo el catálogo
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* Categories */}
        <motion.div
          className="mt-16 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {["Tintas", "Máquinas", "Agujas", "Mobiliario", "Aftercare", "Accesorios"].map((category) => (
            <motion.a
              key={category}
              href={`#shop-${category.toLowerCase()}`}
              className="font-cinzel text-xs tracking-[0.15em] px-6 py-3 border border-border rounded-full hover:border-primary hover:text-primary transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
