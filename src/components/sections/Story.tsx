import FadeContent from "@/components/FadeContent";
import ScrollReveal from "@/components/ScrollReveal";
import { OliveBranch } from "@/components/shared/OliveBranch";
import { PaperLabel } from "@/components/shared/PaperLabel";
import { DoubleBorder } from "@/components/shared/DoubleBorder";
import { Section } from "@/components/shared/Section";
import { Card, CardContent } from "@/components/ui/card";

import { wedding } from "@/data/wedding";

export const Story = () => {
  return (
    <Section id="historia" labelledBy="historia-titulo">
      <FadeContent duration={850} ease="power3.out" threshold={0.15}>
        <DoubleBorder>
          <Card className="px-6 py-12 md:px-16 md:py-20">
            <CardContent className="mx-auto flex max-w-[65ch] flex-col items-center gap-8 px-0 text-center">
              <h2
                id="historia-titulo"
                className="font-script text-[clamp(3rem,6vw,5rem)] leading-none font-normal text-forest">
                Nuestra historia
              </h2>
              <OliveBranch />
              <ScrollReveal
                enableBlur
                baseOpacity={0.55}
                baseRotation={0}
                blurStrength={2}
                rotationEnd="top 70%"
                wordAnimationEnd="top 65%"
                textClassName="font-serif text-[1.2rem] leading-[1.8] font-normal tracking-[0.03em] text-forest md:text-[1.35rem]">
                {wedding.story}
              </ScrollReveal>
            </CardContent>
          </Card>
        </DoubleBorder>
      </FadeContent>
    </Section>
  );
};
