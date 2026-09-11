import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import StudioSection from "@/components/StudioSection";
import BookingSection from "@/components/BookingSection";
import { studioCopy } from "@/data/copy";
import { aboutProcess } from "@/data/about";

const Estudio = () => {
  return (
    <PageLayout>
      <PageHero title="ESTUDIO" subtitle="PRIVADO · MEDELLÍN" description={studioCopy.body} />
      <StudioSection />

      <section className="border-y border-border/50 bg-secondary/20 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 font-metal text-3xl text-primary md:text-5xl">Cómo se arma una sesión</h2>
          <p className="mx-auto mb-12 max-w-xl font-montserrat text-sm text-muted-foreground">
            Cita previa, sin afanes. Nos sentamos, nos parchamos y salís con un trabajo impecable.
          </p>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
            {aboutProcess.map((item) => (
              <div key={item.t} className="flex flex-col items-center p-4">
                <div className="mb-4 flex h-16 w-16 items-center justify-center border border-primary/30 bg-background shadow-[0_0_18px_hsla(215,60%,32%,0.45)]">
                  <div className="h-8 w-8 bg-primary/20" />
                </div>
                <h3 className="mb-2 font-cinzel text-lg text-white">{item.t}</h3>
                <p className="max-w-[220px] text-sm text-muted-foreground">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BookingSection />
    </PageLayout>
  );
};

export default Estudio;
