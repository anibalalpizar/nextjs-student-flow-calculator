import type { Metadata } from "next"
import Link from "next/link"
import {
  GraduationCap,
  BarChart3,
  Users,
  Calculator,
  ArrowRight,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export const metadata: Metadata = {
  title:
    "Calculador de Flujo Estudiantil | Análisis de Retención Universitaria",
  description:
    "Herramienta profesional para analizar la retención y fluctuación de estudiantes en programas universitarios. Incluye gráficos interactivos y análisis detallado.",
  keywords: [
    "retención estudiantil",
    "análisis universitario",
    "flujo de estudiantes",
    "educación superior",
  ],
  openGraph: {
    title: "Calculador de Flujo Estudiantil",
    description:
      "Analiza la retención y fluctuación de estudiantes universitarios con gráficos interactivos",
    type: "website",
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-6 mb-16">
          <div className="flex items-center justify-center gap-3">
            <GraduationCap className="h-12 w-12 text-blue-600" />
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              Calculador de Flujo Estudiantil
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Herramienta profesional para analizar la retención y fluctuación de
            estudiantes en programas universitarios con gráficos interactivos y
            análisis detallado.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/calculator">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Comenzar Análisis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/help">
              <Button variant="outline" size="lg">
                Ver Guía de Uso
              </Button>
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="text-center">
            <CardHeader>
              <Calculator className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <CardTitle className="text-lg">Análisis Preciso</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Cálculos automáticos de retención, deserción e incrementos
                estudiantiles
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <BarChart3 className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <CardTitle className="text-lg">Gráficos Interactivos</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Visualizaciones claras con gráficos de barras, líneas y
                tendencias
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <CardTitle className="text-lg">Flujo Completo</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Maneja incrementos y decrementos de estudiantes entre períodos
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <GraduationCap className="h-8 w-8 text-orange-600 mx-auto mb-2" />
              <CardTitle className="text-lg">Fácil de Usar</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Interfaz intuitiva diseñada para administradores educativos
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            ¿Listo para analizar tu programa académico?
          </h2>
          <p className="text-gray-600 mb-6">
            Comienza ahora y obtén insights valiosos sobre la retención
            estudiantil en minutos.
          </p>
          <Link href="/calculator">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Iniciar Calculador
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
