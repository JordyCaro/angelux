import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { MapPin, Phone, Clock } from "lucide-react";
import FaqSection from "@/components/FaqSection";
import SocialLinks from "@/components/SocialLinks";
import { ChannelCta, QuoteCta } from "@/components/WhatsAppCta";
import { bookingSteps, contactCopy, phoneDisplay, whatsappUrl } from "@/data/copy";

const Contact = () => {
  return (
    <PageLayout>
      <PageHero title="CONTACTO" subtitle="ESCRÍBEME DE UNA" description={contactCopy.body} />

      <section className="relative overflow-hidden bg-black py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="space-y-8 text-center lg:text-left">
              <h2 className="mb-6 font-metal text-3xl text-white md:text-4xl">Información</h2>

              <div className="space-y-6">
                <div className="group flex flex-col items-center gap-4 text-muted-foreground sm:flex-row sm:items-start">
                  <div className="rounded-lg border border-border bg-secondary p-3 transition-colors group-hover:border-primary/50">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-cinzel text-lg text-white">Estudio</h3>
                    <p>Medellín</p>
                    <p>Cita previa · Estudio privado</p>
                  </div>
                </div>

                <div className="group flex flex-col items-center gap-4 text-muted-foreground sm:flex-row sm:items-start">
                  <div className="rounded-lg border border-border bg-secondary p-3 transition-colors group-hover:border-primary/50">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-cinzel text-lg text-white">WhatsApp</h3>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                      {phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="group flex flex-col items-center gap-4 text-muted-foreground sm:flex-row sm:items-start">
                  <div className="rounded-lg border border-border bg-secondary p-3 transition-colors group-hover:border-primary/50">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-cinzel text-lg text-white">Agenda</h3>
                    <p className="mx-auto max-w-xs sm:mx-0">{bookingSteps}</p>
                    <p>Abonas para bloquear fecha.</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3 pt-4 lg:items-start">
                <SocialLinks className="justify-center lg:justify-start" iconClassName="h-5 w-5" />
                <ChannelCta className="w-full max-w-xs py-3 lg:w-auto" />
              </div>
            </div>

            <div className="relative flex min-h-[320px] w-full flex-col items-center justify-center overflow-hidden border border-border bg-secondary/30 p-8 text-center md:min-h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary to-background opacity-70" />
              <div className="relative z-10 flex w-full max-w-sm flex-col items-center">
                <p className="mb-3 font-cinzel text-[11px] tracking-[0.35em] text-angelux-steel">WHATSAPP · MEDELLÍN</p>
                <p className="font-metal text-3xl text-primary">Coticemos tu idea</p>
                <p className="mt-4 font-montserrat text-sm text-muted-foreground">{bookingSteps}</p>
                <div className="mt-6 flex w-full flex-col gap-3">
                  <QuoteCta className="w-full" />
                  <ChannelCta className="w-full py-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FaqSection compact />
    </PageLayout>
  );
};

export default Contact;
