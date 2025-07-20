import type { Metadata } from "next"

import HelpPageClient from "./HelpPageClient"

export const metadata: Metadata = {
  title: "Ayuda | Calculador de Flujo Estudiantil",
  description:
    "Guía de uso, información del desarrollador y formulario de feedback para el Calculador de Flujo Estudiantil.",
}

export default function HelpPage() {
  return <HelpPageClient />
}
