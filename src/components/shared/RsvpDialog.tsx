import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

import GlareHover from "@/components/GlareHover"
import { DoubleBorder } from "@/components/shared/DoubleBorder"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { buildRsvpMessage, wedding } from "@/data/wedding"

const rsvpSchema = z.object({
  name: z.string().trim().min(2, "Escribe tu nombre"),
  guests: z.string().min(1, "Indica el número de invitados"),
  diet: z.string().trim().max(280, "Usa un texto más breve"),
  message: z.string().trim().max(500, "Usa un mensaje más breve"),
})

type RsvpValues = z.infer<typeof rsvpSchema>

const fieldClassName =
  "h-11 w-full rounded-sm border-input bg-ivory font-serif text-lg tracking-[0.02em] text-forest shadow-none placeholder:text-forest/40"

const guestOptions = ["1", "2", "3", "4", "5", "6", "7", "8"]

export const RsvpDialog = () => {
  const [open, setOpen] = useState(false)
  const form = useForm<RsvpValues>({
    resolver: zodResolver(rsvpSchema),
    defaultValues: {
      name: "",
      guests: "",
      diet: "",
      message: "",
    },
  })

  const handleSubmit = (values: RsvpValues) => {
    const text = buildRsvpMessage(values)
    const href = `https://wa.me/${wedding.whatsapp}?text=${encodeURIComponent(text)}`
    window.open(href, "_blank", "noopener,noreferrer")
    toast.success("Confirmación lista. Se abrió WhatsApp con tu mensaje.")
    form.reset()
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DoubleBorder className="inline-block bg-ivory">
        <GlareHover
          width="auto"
          height="auto"
          background="transparent"
          borderColor="transparent"
          borderRadius="2px"
          glareColor="#f4e7cf"
          glareOpacity={0.42}
          glareAngle={-18}
          glareSize={48}
          softness={0.9}
          variant="sheen"
          transitionDuration={1100}
          rimGlint={false}
          className="border-0"
          style={{ borderWidth: 0 }}
        >
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="h-12 border-transparent! bg-transparent! px-7 font-sans text-[11px] font-normal tracking-[0.32em] text-forest uppercase shadow-none hover:bg-forest! hover:text-ivory! md:px-10"
            >
              Confirmar asistencia
            </Button>
          </DialogTrigger>
        </GlareHover>
      </DoubleBorder>

      <DialogContent className="max-h-[calc(100dvh-2rem)] overflow-y-auto bg-ivory p-6 sm:max-w-lg! sm:p-8">
        <DialogHeader>
          <DialogTitle className="font-script text-4xl font-normal text-forest">
            Con cariño
          </DialogTitle>
          <DialogDescription className="font-serif text-lg leading-relaxed tracking-[0.02em] text-forest">
            Cuéntanos si podrás acompañarnos. Al enviar, se abre WhatsApp con tu
            confirmación.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="grid gap-5" noValidate>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      autoComplete="name"
                      placeholder="Tu nombre"
                      className={fieldClassName}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="guests"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Número de invitados</FormLabel>
                  <Select value={field.value || undefined} onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger className={`${fieldClassName} w-full`}>
                        <SelectValue placeholder="Selecciona" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-ivory font-serif text-lg text-forest">
                      {guestOptions.map((count) => (
                        <SelectItem key={count} value={count} className="font-serif text-base">
                          {count}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="diet"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Restricciones alimentarias</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      rows={3}
                      placeholder="Si no hay ninguna, puedes dejarlo en blanco"
                      className={`${fieldClassName} h-auto min-h-24 py-3`}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mensaje</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      rows={3}
                      placeholder="Unas palabras para los novios"
                      className={`${fieldClassName} h-auto min-h-24 py-3`}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="mt-2 h-11 font-sans text-[11px] font-normal tracking-[0.28em] uppercase"
            >
              Enviar confirmación
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
