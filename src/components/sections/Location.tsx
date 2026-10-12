import FadeContent from "@/components/FadeContent"
import { DoubleBorder } from "@/components/shared/DoubleBorder"
import { OliveLeaf } from "@/components/shared/OliveBranch"
import { Section } from "@/components/shared/Section"
import { Card, CardContent } from "@/components/ui/card"
import { wedding } from "@/data/wedding"

export const Location = () => {
  return (
    <Section id="ubicacion" labelledBy="ubicacion-titulo">
      <FadeContent duration={850} ease="power3.out" threshold={0.15}>
        <DoubleBorder>
          <Card className="gap-0 overflow-hidden p-0">
            <div className="map-tone aspect-[4/3] w-full md:aspect-[16/8]">
              <iframe
                title={`Mapa de ${wedding.venue}, ${wedding.city}`}
                src={wedding.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0"
              />
            </div>
            <CardContent className="grid gap-6 px-6 py-10 md:grid-cols-12 md:px-12 md:py-12">
              <div className="md:col-span-5">
                <p className="flex items-center gap-3 font-sans text-[11px] font-light tracking-[0.34em] text-forest uppercase">
                  <OliveLeaf />
                  Cómo llegar
                </p>
                <h2
                  id="ubicacion-titulo"
                  className="mt-4 font-script text-[clamp(3rem,6vw,4.5rem)] leading-none font-normal text-forest"
                >
                  {wedding.venue}
                </h2>
              </div>
              <div className="md:col-span-7 md:pt-8">
                <p className="font-serif text-xl leading-relaxed tracking-[0.03em] text-forest">
                  {wedding.address}
                  <br />
                  {wedding.city}
                </p>
                <p className="mt-5 max-w-[52ch] font-serif text-lg leading-[1.8] tracking-[0.02em] text-forest/85">
                  {wedding.accessNotes}
                </p>
                <div className="mt-6 flex flex-col items-start gap-3">
                  <a
                    href={wedding.mapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex font-sans text-[11px] tracking-[0.28em] text-forest uppercase underline decoration-olive underline-offset-4"
                  >
                    Abrir en Google Maps
                  </a>
                  <a
                    href={wedding.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex font-sans text-[11px] tracking-[0.28em] text-forest uppercase underline decoration-olive underline-offset-4"
                  >
                    Ver el lugar
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </DoubleBorder>
      </FadeContent>
    </Section>
  )
}
