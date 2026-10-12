import { useEffect, useState } from "react"

import { MobileMenu } from "@/components/layout/MobileMenu"
import { Monogram } from "@/components/shared/Monogram"
import { navLinks } from "@/data/wedding"
import { cn } from "@/lib/utils"

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-500",
        scrolled
          ? "border-b border-mist/80 bg-ivory/88 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-[4.5rem] md:px-8">
        <a
          href="#inicio"
          className={cn(
            "font-script text-[2rem] leading-none",
            scrolled ? "text-forest" : "text-night",
          )}
        >
          <Monogram accent={scrolled} />
        </a>
        <nav className="hidden lg:block" aria-label="Secciones">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "font-sans text-[11px] font-light tracking-[0.3em] uppercase",
                    scrolled ? "text-forest" : "text-night",
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <MobileMenu scrolled={scrolled} />
      </div>
    </header>
  )
}
