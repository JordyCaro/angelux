import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import StudioSection from "@/components/StudioSection";
import BookingSection from "@/components/BookingSection";

const Estudio = () => {
  return (
    <PageLayout>
      <PageHero
        title="ESTUDIO"
        subtitle="MEDELLÍN"
        description="Un espacio privado para la sesión. Cita previa, protocolo y calma. La pieza se arma por mensaje."
      />
      <StudioSection />

      <section className="border-y border-border/50 bg-secondary/20 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-12 font-metal text-3xl text-primary md:text-5xl">CÓMO SE ARMA UNA SESIÓN</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
            {[
              { title: "CONSULTA", desc: "Idea, referencias y zona del cuerpo. Cotizo cuando veo eso." },
              { title: "DISEÑO", desc: "Boceto a medida. Ajustamos hasta que el volumen encaje." },
              { title: "SESIÓN", desc: "En el estudio. Luz, calma, protocolo. El detalle no se apura." },
              { title: "CUIDADO", desc: "Aftercare por mensaje. La pieza no se abandona al secar." },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center p-4">
                <div className="mb-4 flex h-16 w-16 items-center justify-center border border-primary/30 bg-background shadow-[0_0_18px_hsla(215,60%,32%,0.45)]">
                  <div className="h-8 w-8 bg-primary/20" />
                </div>
                <h3 className="mb-2 font-cinzel text-lg text-white">{item.title}</h3>
                <p className="max-w-[220px] text-sm text-muted-foreground">{item.desc}</p>
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
