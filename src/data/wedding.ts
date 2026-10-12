export const wedding = {
  partnerOne: "Daniel",
  partnerTwo: "Joselyn",
  initials: "D & J",
  date: {
    day: "05",
    month: "12",
    year: "26",
  },
  fullDate: "Sábado, 5 de diciembre de 2026",
  yearLabel: "2026",
  rsvpBy: "5 de noviembre",
  ceremonyTime: "17:00 h",
  banquetTime: "20:00 h",
  venue: "Casa Blanca Ranch",
  address: "La Magdalena",
  city: "Miranda, Venezuela",
  placeLine: "La Magdalena",
  mapQuery: "La Magdalena, Miranda, Venezuela",
  mapUrl:
    "https://www.google.com/maps/search/La%20Magdalena%2C%20Miranda%2C%20Venezuela/@10.2313,-66.91,17z?hl=es",
  mapEmbed:
    "https://maps.google.com/maps?q=10.2313,-66.91&z=17&hl=es&output=embed",
  instagram: "https://www.instagram.com/casablancaranch.01/",
  whatsapp: "34600000000",
  email: "rsvp@ejemplo.com",
  coverLine: "Con la alegría de unir nuestras vidas",
  meetingLine:
    "Nos encontramos sin buscarlo, y desde ese día el tiempo decidió quedarse con nosotros.",
  story:
    "Hay encuentros que no se explican: se reconocen. Hoy queremos compartir con ustedes el comienzo de una vida en común, con la gratitud de quienes han caminado a nuestro lado y el deseo de un día sereno, hermoso y nuestro.",
  dressNote:
    "Pueden elegir un vestuario acorde a la ocasión, en los tonos que se muestran aquí.",
  accessNotes:
    "La celebración es en Casa Blanca Ranch, en La Magdalena, estado Miranda. El mapa abre el punto de llegada.",
  passes: "Tres pases por familia",
} as const

export const dressSwatches = [
  { name: "Ocre Profundo", hex: "#4E3300" },
  { name: "Bronce", hex: "#82612D" },
  { name: "Ocre Dorado", hex: "#B9935A" },
  { name: "Ámbar", hex: "#FF9800" },
  { name: "Dorado Claro", hex: "#FFCC50" },
] as const

export const navLinks = [
  { href: "#inicio", label: "Home" },
  { href: "#historia", label: "Nuestra historia" },
  { href: "#dress-code", label: "Dress code" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#rsvp", label: "RSVP" },
] as const

export const buildRsvpMessage = (values: {
  name: string
  guests: string
  diet: string
  message: string
}) => {
  const lines = [
    `Hola, confirmo mi asistencia a la boda de ${wedding.partnerOne} & ${wedding.partnerTwo}.`,
    `Nombre: ${values.name}`,
    `Invitados: ${values.guests}`,
    `Restricciones alimentarias: ${values.diet || "Ninguna"}`,
    `Mensaje: ${values.message || "—"}`,
  ]

  return lines.join("\n")
}
