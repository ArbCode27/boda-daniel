import { wedding } from "@/data/wedding"
import { cn } from "@/lib/utils"

type MonogramProps = {
  className?: string
  accent?: boolean
}

export const Monogram = ({ className, accent = true }: MonogramProps) => {
  const [left = "", right = ""] = wedding.initials.split("&")

  return (
    <span className={className}>
      {left.trim()}
      <span className={cn(accent ? "text-olive" : "text-inherit")}> & </span>
      {right.trim()}
    </span>
  )
}
