import Link from "next/link"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { GraduationCap, Home, Calculator, HelpCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    template: "%s | Calculador de Flujo Estudiantil",
    default: "Calculador de Flujo Estudiantil",
  },
  description:
    "Herramienta profesional para analizar la retención y fluctuación de estudiantes universitarios",
  keywords: [
    "retención estudiantil",
    "análisis universitario",
    "flujo de estudiantes",
    "educación superior",
  ],
  authors: [
    { name: "Aníbal Alpízar", url: "https://github.com/anibalalpizar" },
  ],
  creator: "Aníbal Alpízar",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://student-flow-calculator.vercel.app",
    siteName: "Calculador de Flujo Estudiantil",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {/* Navigation */}
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="flex items-center gap-2">
                  <GraduationCap className="h-8 w-8 text-blue-600" />
                  <span className="font-bold text-xl text-gray-900">
                    Flujo Estudiantil
                  </span>
                </Link>
              </div>
              <div className="flex items-center space-x-4">
                <Link href="/">
                  <Button variant="ghost" size="sm">
                    <Home className="h-4 w-4 mr-2" />
                    Inicio
                  </Button>
                </Link>
                <Link href="/calculator">
                  <Button variant="ghost" size="sm">
                    <Calculator className="h-4 w-4 mr-2" />
                    Calculador
                  </Button>
                </Link>
                <Link href="/help">
                  <Button variant="ghost" size="sm">
                    <HelpCircle className="h-4 w-4 mr-2" />
                    Ayuda
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <main>{children}</main>
      </body>
    </html>
  )
}
