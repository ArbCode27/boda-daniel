import FadeContent from "@/components/FadeContent"
import { DoubleBorder } from "@/components/shared/DoubleBorder"
import { OliveLeaf } from "@/components/shared/OliveBranch"
import { Section } from "@/components/shared/Section"
import { Card } from "@/components/ui/card"
import { wedding } from "@/data/wedding"

export const Photo = () => {
  return (
    <Section id="retrato" className="pt-8 md:pt-10">
      <FadeContent duration={850} ease="power3.out" delay={80} threshold={0.2}>
        <DoubleBorder className="mx-auto max-w-md">
          <Card className="gap-0 bg-ivory p-4 md:p-6">
            <div className="overflow-hidden bg-ivory">
              <img
                src="/couple.webp"
                alt="Retrato de Daniel y Joselyn"
                width={404}
                height={460}
                loading="lazy"
                decoding="async"
                className="h-auto w-full"
              />
            </div>
            <div className="mt-5 flex items-center justify-center gap-3 text-olive" aria-hidden="true">
              <span className="h-px w-10 bg-olive/60" />
              <OliveLeaf />
              <span className="h-px w-10 bg-olive/60" />
            </div>
            <p className="flex flex-wrap items-baseline justify-center gap-x-3 px-3 pt-4 pb-3 text-center font-script text-[clamp(2.35rem,9vw,4.5rem)] leading-[0.9] text-forest">
              <span>{wedding.partnerOne}</span>
              <span className="text-[0.62em] text-olive">&</span>
              <span>{wedding.partnerTwo}</span>
            </p>
          </Card>
        </DoubleBorder>
      </FadeContent>
    </Section>
  )
}
