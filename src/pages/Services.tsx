import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import ServicesSection from "@/components/ServicesSection";
import AftercareSection from "@/components/AftercareSection";
import BookingSection from "@/components/BookingSection";
import { craftCopy } from "@/data/copy";
import { aboutProcess } from "@/data/about";

const Services = () => {
  return (
    <PageLayout>
      <PageHero
        title="SERVICIOS"
        subtitle="EL OFICIO"
        description={craftCopy.body}
      />
      <ServicesSection hideAftercare />
      <AftercareSection />

      <section className="container mx-auto px-4 py-24 md:py-32">
        <div className="mb-16 text-center md:text-left">
          <p className="mb-3 font-cinzel text-[11px] tracking-[0.4em] text-angelux-steel">{craftCopy.kicker}</p>
          <h2 className="font-metal text-3xl text-primary md:text-5xl">100% a medida</h2>
          <p className="mx-auto mt-4 max-w-xl font-montserrat text-sm leading-relaxed text-muted-foreground md:mx-0">
            Tú traes la idea y juntos le damos volumen y vida hasta que encaje perfecto con tu anatomía.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2 md:grid-cols-4">
          {aboutProcess.map((item, i) => (
            <div key={item.t} className="bg-background p-6 text-center md:p-8 md:text-left">
              <span className="font-metal text-4xl text-primary/20">0{i + 1}</span>
              <h3 className="mt-4 font-metal text-2xl text-primary">{item.t}</h3>
              <div className="mx-auto my-5 h-px w-12 bg-angelux-steel/60 md:mx-0" />
              <p className="font-montserrat text-sm leading-relaxed text-muted-foreground">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      <BookingSection />
    </PageLayout>
  );
};

export default Services;
