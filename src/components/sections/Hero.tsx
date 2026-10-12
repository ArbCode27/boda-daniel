import BlurText from "@/components/BlurText"
import FadeContent from "@/components/FadeContent"
import { DoubleBorder } from "@/components/shared/DoubleBorder"
import { OliveLeaf } from "@/components/shared/OliveBranch"
import { PaperLabel } from "@/components/shared/PaperLabel"
import { Card } from "@/components/ui/card"
import { wedding } from "@/data/wedding"

const dateParts = [wedding.date.day, wedding.date.month, wedding.date.year]

export const Hero = () => {
  return (
    <section id="inicio" className="scroll-mt-24 px-5 pt-28 pb-16 md:px-8 md:pt-36 md:pb-24">
      <FadeContent duration={900} ease="power3.out" className="mx-auto w-full max-w-6xl">
        <DoubleBorder>
          <Card className="gap-10 px-6 py-12 md:px-12 md:py-16 lg:px-16 lg:py-20">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-6">
              <div className="flex flex-col items-center text-center lg:col-span-7">
                <p className="flex items-center justify-center gap-3 font-sans text-[11px] font-light tracking-[0.34em] text-forest uppercase">
                  <OliveLeaf />
                  Invitación
                </p>
                <p className="mt-6 w-full max-w-[18ch]">
                  <BlurText
                    text={wedding.coverLine}
                    animateBy="words"
                    direction="bottom"
                    delay={110}
                    stepDuration={0.5}
                    className="w-full justify-center font-serif text-[1.65rem] leading-snug font-normal tracking-[0.03em] text-forest italic md:text-4xl"
                  />
                </p>
                <h1 className="mt-8 flex w-full min-w-0 max-w-full flex-wrap items-baseline justify-center gap-x-4 gap-y-2 text-center text-forest">
                  <BlurText
                    text={wedding.partnerOne}
                    animateBy="words"
                    direction="bottom"
                    delay={80}
                    stepDuration={0.55}
                    className="font-script text-[clamp(4rem,8vw,9rem)] leading-[0.85] font-normal"
                  />
                  <span className="font-script text-[clamp(2.4rem,4vw,4.25rem)] leading-none text-olive">
                    &
                  </span>
                  <BlurText
                    text={wedding.partnerTwo}
                    animateBy="words"
                    direction="bottom"
                    delay={160}
                    stepDuration={0.55}
                    className="font-script text-[clamp(4rem,8vw,9rem)] leading-[0.85] font-normal"
                  />
                </h1>
              </div>

              <div className="flex justify-center lg:col-span-5 lg:justify-end">
                <div className="flex flex-col items-center">
                  <span className="mb-3 h-14 w-px bg-olive md:h-20" aria-hidden="true" />
                  <p className="flex flex-col items-center">
                    <span className="sr-only">{wedding.fullDate}</span>
                    {dateParts.map((part, index) => (
                      <span key={`${part}-${index}`} className="flex flex-col items-center" aria-hidden="true">
                        {index > 0 && (
                          <span className="my-1 font-serif text-xl leading-none text-amber md:text-2xl">
                            /
                          </span>
                        )}
                        <span className="font-serif text-[clamp(4.75rem,11vw,7.5rem)] leading-[0.82] font-medium tracking-[0.04em] text-ocre-900">
                          {part}
                        </span>
                      </span>
                    ))}
                  </p>
                  <span className="mt-3 h-14 w-px bg-olive md:h-20" aria-hidden="true" />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 border-t border-mist/80 pt-8 text-center md:flex-row md:justify-between md:text-left">
              <p className="font-sans text-[11px] font-light tracking-[0.32em] text-forest uppercase">
                {wedding.venue}
              </p>
              <span className="hidden h-px flex-1 bg-olive/45 md:block" aria-hidden="true" />
              <p className="font-serif text-xl tracking-[0.22em] text-ocre-700">{wedding.yearLabel}</p>
              <span className="hidden h-px flex-1 bg-olive/45 md:block" aria-hidden="true" />
              <p className="font-sans text-[11px] font-light tracking-[0.32em] text-forest uppercase">
                {wedding.placeLine}
              </p>
            </div>
          </Card>
        </DoubleBorder>
      </FadeContent>

      <a href="#retrato" className="mx-auto mt-12 flex w-fit flex-col items-center gap-3">
        <PaperLabel>Desliza</PaperLabel>
        <span className="h-10 w-px bg-ocre-900" aria-hidden="true" />
      </a>
    </section>
  )
}
