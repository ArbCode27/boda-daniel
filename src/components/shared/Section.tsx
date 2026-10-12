import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type SectionProps = {
  id: string
  children: ReactNode
  className?: string
  labelledBy?: string
}

export const Section = ({ id, children, className, labelledBy }: SectionProps) => {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn("scroll-mt-24 px-5 py-24 md:px-8 md:py-32", className)}
    >
      <div className="mx-auto w-full min-w-0 max-w-6xl">{children}</div>
    </section>
  )
}
