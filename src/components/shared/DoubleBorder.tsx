import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type DoubleBorderProps = {
  children: ReactNode
  className?: string
  innerClassName?: string
}

export const DoubleBorder = ({
  children,
  className,
  innerClassName,
}: DoubleBorderProps) => {
  return (
    <div className={cn("border border-forest p-[5px]", className)}>
      <div className={cn("border border-amber", innerClassName)}>{children}</div>
    </div>
  )
}
