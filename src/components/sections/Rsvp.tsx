import FadeContent from "@/components/FadeContent"
import { DoubleBorder } from "@/components/shared/DoubleBorder"
import { OliveLeaf } from "@/components/shared/OliveBranch"
import { RsvpDialog } from "@/components/shared/RsvpDialog"
import { Section } from "@/components/shared/Section"
import { Card, CardContent } from "@/components/ui/card"
import { wedding } from "@/data/wedding"

export const Rsvp = () => {
  return (
    <Section id="rsvp" labelledBy="rsvp-titulo" className="pb-28 md:pb-36">
      <FadeContent duration={850} ease="power3.out" threshold={0.2}>
        <DoubleBorder className="mx-auto max-w-3xl">
          <Card>
            <CardContent className="flex flex-col items-center gap-8 px-6 py-14 text-center md:px-16 md:py-20">
              <OliveLeaf />
              <h2
                id="rsvp-titulo"
                className="font-script text-[clamp(3.5rem,8vw,6rem)] leading-none font-normal text-forest"
              >
                Con cariño
              </h2>
              <p className="max-w-[38ch] font-serif text-xl leading-[1.8] tracking-[0.03em] text-forest">
                Será un honor contar con su presencia. Confirmen antes del {wedding.rsvpBy}.
              </p>
              <RsvpDialog />
              <a
                href={`mailto:${wedding.email}`}
                className="font-sans text-[11px] tracking-[0.28em] text-forest uppercase"
              >
                {wedding.email}
              </a>
            </CardContent>
          </Card>
        </DoubleBorder>
      </FadeContent>
    </Section>
  )
}
