"use client"

import {
  Github,
  ExternalLink,
  Plus,
  Calculator,
  BarChart3,
  Users,
} from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FeedbackForm } from "@/components/forms/feedback-form"

import { DEVELOPER_INFO } from "@/lib/constants"

export default function HelpPageClient() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">Centro de Ayuda</h1>
          <p className="text-gray-600">
            Guía de uso, información del desarrollador y soporte
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Github className="h-5 w-5" />
                Desarrollador
              </CardTitle>
              <CardDescription>
                Información sobre el creador de esta aplicación
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Github className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{DEVELOPER_INFO.name}</h3>
                  <p className="text-sm text-gray-600">{DEVELOPER_INFO.role}</p>
                </div>
              </div>

              <Button
                variant="outline"
                className="w-full bg-transparent"
                onClick={() => window.open(DEVELOPER_INFO.github, "_blank")}
              >
                <Github className="h-4 w-4 mr-2" />
                Ver Repositorio en GitHub
                <ExternalLink className="h-4 w-4 ml-2" />
              </Button>

              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold mb-2">Sobre esta aplicación</h4>
                <p className="text-sm text-gray-600">
                  Esta herramienta fue desarrollada para ayudar a instituciones
                  educativas a analizar el flujo de estudiantes a lo largo de
                  sus programas académicos, considerando tanto decrementos como
                  incrementos en la matrícula.
                </p>
              </div>

              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold mb-2">Tecnologías utilizadas</h4>
                <div className="flex flex-wrap gap-2">
                  {DEVELOPER_INFO.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <FeedbackForm />
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Guía de Uso</CardTitle>
            <CardDescription>
              Aprende a usar todas las funcionalidades de la aplicación
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 border rounded-lg">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                  <Plus className="h-4 w-4 text-blue-600" />
                </div>
                <h4 className="font-semibold mb-2">1. Configuración</h4>
                <p className="text-sm text-gray-600">
                  Agrega y edita los períodos académicos con el número de
                  estudiantes correspondiente.
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mb-3">
                  <Calculator className="h-4 w-4 text-green-600" />
                </div>
                <h4 className="font-semibold mb-2">2. Análisis</h4>
                <p className="text-sm text-gray-600">
                  Revisa la tabla detallada con cálculos de retención, deserción
                  e incrementos.
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                  <BarChart3 className="h-4 w-4 text-purple-600" />
                </div>
                <h4 className="font-semibold mb-2">3. Visualización</h4>
                <p className="text-sm text-gray-600">
                  Explora los gráficos interactivos para entender mejor las
                  tendencias.
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mb-3">
                  <Users className="h-4 w-4 text-orange-600" />
                </div>
                <h4 className="font-semibold mb-2">4. Resumen</h4>
                <p className="text-sm text-gray-600">
                  Obtén estadísticas clave y recomendaciones basadas en los
                  datos.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
