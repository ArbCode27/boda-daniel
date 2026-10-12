import { useState } from "react"

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

type DressSwatchProps = {
  name: string
  hex: string
}

export const DressSwatch = ({ name, hex }: DressSwatchProps) => {
  const [revealed, setRevealed] = useState(false)

  const handleClick = () => {
    setRevealed((current) => !current)
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          type="button"
          aria-label={name}
          aria-pressed={revealed}
          data-revealed={revealed ? "" : undefined}
          onClick={handleClick}
          className="group flex w-20 flex-col items-center md:w-24"
        >
          <span
            className="size-16 rounded-full border-2 border-ivory shadow-[0_8px_18px_rgba(78,51,0,0.22)] transition-transform duration-500 ease-out group-hover:scale-[1.08] group-focus-visible:scale-[1.08] md:size-[72px]"
            style={{ backgroundColor: hex }}
          />
          <span
            data-revealed={revealed ? "" : undefined}
            className={cn(
              "mt-3 hidden max-w-[8rem] bg-ivory px-2 py-1 text-center font-sans text-[11px] leading-snug font-normal tracking-[0.14em] text-ocre-900 uppercase shadow-[0_6px_16px_rgba(78,51,0,0.16)]",
              "group-focus-visible:block data-[revealed]:block md:hidden",
            )}
          >
            {name}
          </span>
        </button>
      </TooltipTrigger>
      <TooltipContent sideOffset={8}>{name}</TooltipContent>
    </Tooltip>
  )
}
