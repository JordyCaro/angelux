import { voiceRows, voices, type Voice } from "@/data/voices";

const TapeItem = ({ voice, tilt }: { voice: Voice; tilt: number }) => {
  return (
    <article
      className="flex shrink-0 items-end gap-4 px-8 md:gap-6 md:px-12"
      style={{ transform: `rotate(${tilt}deg)` }}
    >
      <span className="mb-1 font-metal text-5xl leading-none text-primary/25 md:text-7xl" aria-hidden>
        “
      </span>
      <div className="min-w-0">
        <p className="whitespace-nowrap font-montserrat text-xl font-medium leading-none text-primary md:text-2xl">
          {voice.quote}
        </p>
        <p className="mt-3 flex items-center gap-3 font-cinzel text-[11px] tracking-[0.32em] text-foreground/70">
          <span aria-hidden>★★★★★</span>
          <span>{voice.name}</span>
        </p>
      </div>
    </article>
  );
};

const Tape = ({
  items,
  reverse,
  duration,
  tilts,
}: {
  items: Voice[];
  reverse?: boolean;
  duration: string;
  tilts: number[];
}) => {
  const unit = [...items, ...items];
  const loop = [...unit, ...unit];

  return (
    <div className="voices-mask overflow-hidden py-5 md:py-7">
      <div
        className={`voices-tape pointer-events-none flex w-max items-end ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
        style={{ animationDuration: duration, animationPlayState: "running" }}
      >
        {loop.map((voice, i) => (
          <div key={`${voice.name}-${i}`} className="flex items-end">
            <TapeItem voice={voice} tilt={tilts[i % tilts.length]} />
            <span
              className="mb-3 shrink-0 px-2 font-cinzel text-[9px] tracking-[0.4em] text-foreground/35 md:px-4"
              aria-hidden
            >
              †
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const VoicesSection = () => {
  return (
    <section id="voces" className="voices-group relative overflow-hidden border-y border-border py-20 md:py-28">
      <div className="absolute inset-0 ink-texture opacity-30" />

      <div className="container relative z-10 mx-auto mb-10 px-4 md:mb-14">
            <p className="mb-3 font-cinzel text-[11px] tracking-[0.4em] text-angelux-steel">VOCES</p>
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <h2 className="font-metal text-4xl text-primary md:text-6xl">La piel habla</h2>
          <p className="max-w-sm font-cinzel text-[10px] tracking-[0.28em] text-muted-foreground md:text-right">
            LO QUE DICE LA GENTE · SIN FILTRO
          </p>
        </div>
      </div>

      <div className="voices-live relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-background to-transparent md:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-background to-transparent md:w-24" />

        <div className="-rotate-[0.8deg]">
          <Tape items={voiceRows[0]} duration="120s" tilts={[-1.4, 0.8, -0.5]} />
        </div>
        <div className="rotate-[0.6deg] border-y border-white/5 bg-primary/[0.02]">
          <Tape items={voiceRows[1]} reverse duration="140s" tilts={[1.1, -0.7, 1.6]} />
        </div>
        <div className="-rotate-[0.4deg]">
          <Tape items={voiceRows[2]} duration="110s" tilts={[-0.9, 1.3, -1.8]} />
        </div>
      </div>

      <div className="voices-static hidden px-4">
        <ul className="mx-auto max-w-2xl space-y-8">
          {voices.map((voice) => (
            <li key={voice.name} className="border-t border-border pt-5">
              <p className="font-montserrat text-lg text-primary">“{voice.quote}”</p>
              <p className="mt-2 font-cinzel text-[11px] tracking-[0.28em] text-foreground/70">
                ★★★★★ · {voice.name}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <p className="relative z-10 mt-10 px-4 text-center font-cinzel text-[10px] tracking-[0.32em] text-muted-foreground">
        La gente opina. La tinta queda.
      </p>
    </section>
  );
};

export default VoicesSection;
