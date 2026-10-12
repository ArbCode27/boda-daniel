import FadeContent from "@/components/FadeContent"
import { DoubleBorder } from "@/components/shared/DoubleBorder"
import { OliveLeaf } from "@/components/shared/OliveBranch"
import { Section } from "@/components/shared/Section"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { wedding } from "@/data/wedding"

const RingsIcon = () => {
  return (
    <svg viewBox="0 0 64 36" className="h-8 w-14 text-olive" fill="none" aria-hidden="true">
      <circle cx="24" cy="18" r="10" stroke="currentColor" strokeWidth="1" />
      <circle cx="40" cy="18" r="10" stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}

export const EventDetails = () => {
  return (
    <Section id="evento" labelledBy="evento-titulo">
      <FadeContent duration={850} ease="power3.out" threshold={0.15}>
        <DoubleBorder>
          <Card className="px-6 py-12 md:px-14 md:py-16">
            <CardContent className="grid gap-10 px-0 lg:grid-cols-12 lg:items-center">
              <div className="flex flex-col items-center gap-5 text-center lg:col-span-5 lg:items-start lg:text-left">
                <RingsIcon />
                <p className="flex items-center gap-3 font-sans text-[11px] font-light tracking-[0.34em] text-forest uppercase">
                  <OliveLeaf />
                  El día
                </p>
                <h2
                  id="evento-titulo"
                  className="font-script text-[clamp(3rem,6vw,4.75rem)] leading-none font-normal text-forest"
                >
                  Celebración
                </h2>
                <p className="font-serif text-2xl tracking-[0.04em] text-ocre-900">
                  {wedding.fullDate}
                </p>
              </div>

              <div className="lg:col-span-7">
                <dl className="flex flex-wrap items-center justify-center gap-x-14 gap-y-8 text-center">
                  <div className="flex flex-col items-center">
                    <dt className="font-sans text-[11px] tracking-[0.28em] text-forest uppercase">
                      Ceremonia
                    </dt>
                    <dd className="mt-2 font-serif text-3xl text-forest">{wedding.ceremonyTime}</dd>
                  </div>
                  <div className="flex flex-col items-center">
                    <dt className="font-sans text-[11px] tracking-[0.28em] text-forest uppercase">
                      Banquete
                    </dt>
                    <dd className="mt-2 font-serif text-3xl text-forest">{wedding.banquetTime}</dd>
                  </div>
                </dl>
                <Separator className="my-8 bg-olive/45" />
                <p className="font-serif text-2xl text-forest">{wedding.venue}</p>
                <p className="mt-2 font-serif text-lg leading-relaxed tracking-[0.03em] text-forest/80">
                  {wedding.address}
                  <br />
                  {wedding.city}
                </p>
                <p className="mt-4 font-sans text-[11px] tracking-[0.24em] text-ocre-700 uppercase">
                  {wedding.passes}
                </p>
                <Button
                  variant="secondary"
                  className="mt-8 h-11 px-6 font-sans text-[11px] font-normal tracking-[0.28em] uppercase"
                  asChild
                >
                  <a href={wedding.mapUrl} target="_blank" rel="noreferrer">
                    Ver en mapa
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </DoubleBorder>
      </FadeContent>
    </Section>
  )
}
