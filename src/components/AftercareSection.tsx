import { motion, useInView } from "framer-motion";
import { Check, X } from "lucide-react";
import { useRef } from "react";
import { aftercareDonts, aftercareDos, aftercareIntro } from "@/data/aftercare";

const AftercareSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="aftercare" ref={ref} className="relative scroll-mt-28 overflow-hidden border-y border-border py-24 md:py-32">
      <div className="absolute inset-0 ink-texture opacity-30" />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          className="mx-auto mb-14 max-w-2xl text-center md:mx-0 md:max-w-3xl md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <p className="mb-3 font-cinzel text-[11px] tracking-[0.4em] text-angelux-steel">CUIDADO DEL TATUAJE</p>
          <h2 className="font-metal text-4xl text-primary md:text-6xl">Aftercare</h2>
          <p className="mx-auto mt-6 max-w-xl font-montserrat text-sm leading-relaxed text-muted-foreground md:mx-0 md:text-base">
            {aftercareIntro}
          </p>
        </motion.div>

        <div className="grid gap-px bg-border lg:grid-cols-2">
          <motion.div
            className="bg-background p-6 sm:p-8 md:p-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.08 }}
          >
            <p className="mb-6 text-center font-cinzel text-[11px] tracking-[0.32em] text-angelux-steel md:text-left">
              HACER
            </p>
            <ul className="space-y-6">
              {aftercareDos.map((item) => (
                <li key={item.t} className="flex gap-4 text-left">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center border border-angelux-steel/40 text-angelux-steel">
                    <Check className="h-4 w-4" strokeWidth={2.5} />
                  </span>
                  <div>
                    <h3 className="font-cinzel text-sm tracking-wide text-primary">{item.t}</h3>
                    <p className="mt-2 font-montserrat text-sm leading-relaxed text-muted-foreground">{item.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="bg-background p-6 sm:p-8 md:p-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.16 }}
          >
            <p className="mb-6 text-center font-cinzel text-[11px] tracking-[0.32em] text-muted-foreground md:text-left">
              EVITAR
            </p>
            <ul className="space-y-6">
              {aftercareDonts.map((item) => (
                <li key={item.t} className="flex gap-4 text-left">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center border border-primary/35 text-primary">
                    <X className="h-4 w-4" strokeWidth={2.5} />
                  </span>
                  <div>
                    <h3 className="font-cinzel text-sm tracking-wide text-primary">{item.t}</h3>
                    <p className="mt-2 font-montserrat text-sm leading-relaxed text-muted-foreground">{item.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AftercareSection;
