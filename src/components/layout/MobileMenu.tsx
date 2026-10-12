import { Menu } from "lucide-react"

import { Monogram } from "@/components/shared/Monogram"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { navLinks } from "@/data/wedding"
import { cn } from "@/lib/utils"

type MobileMenuProps = {
  scrolled: boolean
}

export const MobileMenu = ({ scrolled }: MobileMenuProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Abrir menú"
          className={cn(
            "lg:hidden",
            scrolled ? "text-forest hover:bg-forest/5" : "text-night hover:bg-night/5",
          )}
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="h-dvh w-screen! max-w-none! border-0 bg-ivory p-8 shadow-none data-[side=right]:w-screen! data-[side=right]:sm:max-w-none!"
      >
        <SheetHeader className="p-0 text-left">
          <SheetTitle className="font-script text-5xl font-normal text-forest">
            <Monogram />
          </SheetTitle>
          <SheetDescription className="sr-only">Navegación de la invitación</SheetDescription>
        </SheetHeader>
        <nav aria-label="Secciones" className="mt-16">
          <ul className="flex flex-col gap-7">
            {navLinks.map((link, index) => (
              <li
                key={link.href}
                className="menu-link"
                style={{ animationDelay: `${80 + index * 90}ms` }}
              >
                <SheetClose asChild>
                  <a
                    href={link.href}
                    className="font-serif text-[2.5rem] leading-none tracking-[0.02em] text-forest"
                  >
                    {link.label}
                  </a>
                </SheetClose>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
