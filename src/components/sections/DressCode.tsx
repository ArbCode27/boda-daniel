import FadeContent from "@/components/FadeContent"
import { DressSwatch } from "@/components/shared/DressSwatch"
import { PaperLabel } from "@/components/shared/PaperLabel"
import { DoubleBorder } from "@/components/shared/DoubleBorder"
import { Section } from "@/components/shared/Section"
import { Card, CardContent } from "@/components/ui/card"
import { dressSwatches, wedding } from "@/data/wedding"

export const DressCode = () => {
  return (
    <Section id="dress-code" labelledBy="dress-titulo" className="py-16 md:py-24">
      <div className="flex flex-col items-center gap-10">
        <h2 id="dress-titulo">
          <PaperLabel>Dress code</PaperLabel>
        </h2>
        <FadeContent duration={800} ease="power3.out" className="w-full" threshold={0.2}>
          <DoubleBorder>
            <Card>
              <CardContent className="px-6 py-8 text-center md:px-12 md:py-10">
                <p className="mx-auto max-w-[46ch] font-serif text-xl leading-[1.8] tracking-[0.03em] text-forest">
                  {wedding.dressNote}
                </p>
              </CardContent>
            </Card>
          </DoubleBorder>
        </FadeContent>
        <ul className="flex flex-wrap items-start justify-center gap-4 md:gap-7">
          {dressSwatches.map((swatch) => (
            <li key={swatch.hex}>
              <DressSwatch name={swatch.name} hex={swatch.hex} />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
