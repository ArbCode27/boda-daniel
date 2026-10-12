import { Monogram } from "@/components/shared/Monogram"
import { wedding } from "@/data/wedding"

export const Footer = () => {
  return (
    <footer className="bg-night px-5 py-16 text-ivory md:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center">
        <p className="font-script text-6xl leading-none md:text-7xl">
          <Monogram />
        </p>
        <span className="h-10 w-px bg-olive" aria-hidden="true" />
        <p className="font-serif text-lg tracking-[0.18em]">
          {wedding.date.day} / {wedding.date.month} / {wedding.date.year}
        </p>
        <p className="font-sans text-[11px] font-light tracking-[0.32em] uppercase">
          {wedding.venue}
        </p>
      </div>
    </footer>
  )
}
