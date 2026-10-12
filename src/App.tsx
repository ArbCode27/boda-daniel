import { lazy, Suspense } from "react"

import Noise from "@/components/Noise"
import { Footer } from "@/components/layout/Footer"
import { Nav } from "@/components/layout/Nav"
import { Hero } from "@/components/sections/Hero"
import { Photo } from "@/components/sections/Photo"
import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"

const Story = lazy(() =>
  import("@/components/sections/Story").then((module) => ({ default: module.Story })),
)
const EventDetails = lazy(() =>
  import("@/components/sections/EventDetails").then((module) => ({
    default: module.EventDetails,
  })),
)
const DressCode = lazy(() =>
  import("@/components/sections/DressCode").then((module) => ({ default: module.DressCode })),
)
const Location = lazy(() =>
  import("@/components/sections/Location").then((module) => ({ default: module.Location })),
)
const Rsvp = lazy(() =>
  import("@/components/sections/Rsvp").then((module) => ({ default: module.Rsvp })),
)

export const App = () => {
  return (
    <TooltipProvider delayDuration={200}>
      <div className="paper-field pointer-events-none fixed inset-0 -z-10" />
      <Noise
        fixed
        opacity={0.08}
        size={1.15}
        fps={6}
        blendMode="multiply"
        contrast={0.35}
        dust={0}
        scratches={0}
        scanlines={0}
        flicker={0}
        zIndex={1}
      />
      <div className="vignette pointer-events-none fixed inset-0 z-[2]" aria-hidden="true" />
      <div className="relative z-10">
        <Nav />
        <main>
          <Hero />
          <Photo />
          <Suspense fallback={<div className="min-h-[40vh]" />}>
            <Story />
            <EventDetails />
            <DressCode />
            <Location />
            <Rsvp />
          </Suspense>
        </main>
        <Footer />
      </div>
      <Toaster position="top-center" />
    </TooltipProvider>
  )
}

export default App
