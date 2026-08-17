import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqItems } from "@/data/faq";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type FaqSectionProps = {
  compact?: boolean;
};

const FaqSection = ({ compact = false }: FaqSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="faq" ref={ref} className={`relative overflow-hidden ${compact ? "py-16" : "py-24 md:py-28"}`}>
      <div className="absolute inset-0 ink-texture opacity-30" />
      <div className="container relative z-10 mx-auto px-4">
        <div className={`grid gap-10 ${compact ? "" : "lg:grid-cols-12"}`}>
          <motion.div
            className={compact ? "" : "lg:col-span-4"}
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
          >
            <p className="mb-3 font-cinzel text-[11px] tracking-[0.4em] text-angelux-steel">DUDAS</p>
            <h2 className="font-metal text-4xl text-primary md:text-5xl">Antes de la aguja</h2>
            <p className="mt-4 max-w-sm font-montserrat text-sm leading-relaxed text-muted-foreground">
              Cuidado, cuándo no tatuarse y las preguntas que todo el mundo hace. Corto y sin mito.
            </p>
          </motion.div>

          <motion.div
            className={compact ? "" : "lg:col-span-8"}
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            <Accordion type="single" collapsible className="border-t border-border">
              {faqItems.map((item, i) => (
                <AccordionItem key={item.q} value={`faq-${i}`} className="border-border">
                  <AccordionTrigger className="items-start py-5 text-left font-cinzel text-sm tracking-wide text-primary hover:no-underline hover:text-angelux-steel sm:items-center">
              <span className="pr-4 text-left">{item.q}</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 font-montserrat text-sm leading-relaxed text-muted-foreground">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
