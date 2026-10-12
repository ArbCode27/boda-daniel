import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type PaperLabelProps = {
  children: ReactNode
  className?: string
}

export const PaperLabel = ({ children, className }: PaperLabelProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center bg-ivory px-4 py-2 font-sans text-[12px] font-normal tracking-[0.22em] text-ocre-900 uppercase shadow-[0_1px_2px_rgba(35,66,61,0.08),0_10px_22px_rgba(78,51,0,0.2)]",
        className,
      )}
    >
      {children}
    </span>
  )
}
