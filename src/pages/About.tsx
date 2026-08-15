import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import FaqSection from "@/components/FaqSection";
import BookingSection from "@/components/BookingSection";
import { Link } from "react-router-dom";

const portrait =
  "https://images.unsplash.com/photo-1611501275019-9b5cda99f35c?auto=format&fit=crop&w=1400&q=80";

const About = () => {
  return (
    <PageLayout>
      <PageHero
        index="003"
        title="SOBRE MÍ"
        subtitle="EL TRAZO DETRÁS DE ANGELUX"
        description="Tatuador itinerante. Domicilios, guest spots y piezas a medida. El blackwork es un fuerte; cada piel pide su ritmo."
      />

      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="container mx-auto grid items-start gap-12 px-4 lg:grid-cols-12">
          <div className="flash-card lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img src={portrait} alt="" className="h-full w-full object-cover grayscale-[0.3] contrast-125" />
              <span className="ink-stamp absolute left-4 top-4">OFICIO</span>
            </div>
          </div>
          <div className="lg:col-span-7">
            <p className="font-cinzel text-[11px] tracking-[0.32em] text-angelux-steel">PRIMERA PERSONA</p>
            <h2 className="mt-3 font-metal text-4xl text-primary md:text-5xl">No hay pared fija. Hay criterio.</h2>
            <div className="mt-8 space-y-4 font-montserrat text-sm leading-relaxed text-muted-foreground md:text-base">
              <p>
                Soy el artista detrás de Angelux Ink. Trabajo sin local: a domicilio, en sesiones privadas y en guest spots de otras ciudades y países. La higiene viaja con el kit, no con el letrero de la puerta.
              </p>
              <p>
                Me importa cómo envejece una pieza. El blackwork y el contraste son un fuerte de lo que hago —peso, sombra, línea que se sostiene— pero no cierro la puerta a lo que pida tu idea.
              </p>
              <p>
                Si llegás con una historia, la sentamos en la piel. Consulta online, diseño a distancia, sesión donde coincidamos, aftercare aunque yo ya esté en otra ruta.
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
              <h2 className="font-metal text-3xl text-primary md:text-5xl">La piel es el estudio</h2>
              <p className="mt-6 max-w-lg font-montserrat text-sm leading-relaxed text-muted-foreground">
                No vendo productos ni una vitrina. Vendo tiempo, trazo y una sesión que se siente tuya. Si hay que viajar, se arma la ruta. Si hay que ir a domicilio, se arma el espacio.
              </p>
              <Link
                to="/galeria"
                className="mt-8 inline-flex font-cinzel text-xs tracking-[0.28em] text-angelux-steel hover:text-primary"
              >
                VER EL ARCHIVO →
              </Link>
            </div>
            <div className="grid gap-px bg-border sm:grid-cols-2">
              {[
                { t: "Consulta", d: "Online. Idea, ciudad, referencias, si es domicilio o guest." },
                { t: "Diseño", d: "Boceto a distancia. Ajustamos hasta que el trazo encaje." },
                { t: "Sesión", d: "Donde coincidamos. Material desechable, luz, silencio." },
                { t: "Aftercare", d: "Seguimiento por mensaje, aunque ya esté en otro país." },
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
