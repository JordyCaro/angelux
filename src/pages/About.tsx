import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import FaqSection from "@/components/FaqSection";
import BookingSection from "@/components/BookingSection";
import { Link } from "react-router-dom";

const portrait = "/gallery/mangas/buda.jpg";

const About = () => {
  return (
    <PageLayout>
      <PageHero
        index="003"
        title="SOBRE MÍ"
        subtitle="JONATHAN · ANGELUX INK"
        description="Tatuador en Medellín. Realismo y sombras. Cada pieza es única: se construye con dedicación, no se copia."
      />

      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="container mx-auto grid items-start gap-12 px-4 lg:grid-cols-12">
          <div className="flash-card lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img src={portrait} alt="Jonathan — Angelux Ink" className="h-full w-full object-cover contrast-110" />
              <span className="ink-stamp absolute left-4 top-4">EL OFICIO</span>
            </div>
          </div>
          <div className="lg:col-span-7">
            <p className="font-cinzel text-[11px] tracking-[0.32em] text-angelux-steel">PRIMERA PERSONA</p>
            <h2 className="mt-3 font-metal text-4xl text-primary md:text-5xl">Hola. Soy Jonathan.</h2>
            <div className="mt-8 space-y-4 font-montserrat text-sm leading-relaxed text-muted-foreground md:text-base">
              <p>
                Tatuo en Medellín. Me especializo en realismo y sombras: el volumen, la luz, el silencio entre un negro y un gris. Eso es el oficio. Lo demás es ruido.
              </p>
              <p>
                Cada tatuaje es único. Lo trabajo con calma y con el detalle que pide la piel de cerca —no el filtro de lejos. Profesionalismo no es un letrero: es llegar, ejecutar y responder cuando la pieza está viva.
              </p>
              <p>
                Si buscás arte en la piel con compromiso de verdad, escribime. Hagamos algo especial. Algo que se lleve, no que se esconda.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card/20 py-24">
        <div className="container mx-auto px-4">
          <p className="mb-4 font-cinzel text-[11px] tracking-[0.4em] text-angelux-steel">CÓMO TRABAJO</p>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-metal text-3xl text-primary md:text-5xl">La sombra no se improvisa</h2>
              <p className="mt-6 max-w-lg font-montserrat text-sm leading-relaxed text-muted-foreground">
                No vendo un catálogo. Vendo tiempo, trazo y una sesión que se siente tuya. Referencias, idea, zona del cuerpo: lo armamos juntos hasta que el realismo encaje.
              </p>
              <Link
                to="/galeria"
                className="mt-8 inline-flex font-cinzel text-xs tracking-[0.28em] text-angelux-steel hover:text-primary"
              >
                VER LAS MANGAS →
              </Link>
            </div>
            <div className="grid gap-px bg-border sm:grid-cols-2">
              {[
                { t: "Consulta", d: "Idea, referencias y zona. Cotizo cuando veo eso, no a ciegas." },
                { t: "Diseño", d: "Boceto a medida. Ajustamos hasta que el volumen encaje con tu cuerpo." },
                { t: "Sesión", d: "Medellín. Luz, calma, protocolo. El detalle se trabaja sin prisa." },
                { t: "Aftercare", d: "Seguimiento por mensaje. La pieza no se abandona al secar." },
              ].map((item) => (
                <article key={item.t} className="bg-background p-6">
                  <h3 className="font-metal text-2xl text-primary">{item.t}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{item.d}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FaqSection compact />
      <BookingSection />
    </PageLayout>
  );
};

export default About;
