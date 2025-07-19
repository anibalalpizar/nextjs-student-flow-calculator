"use client"

import type React from "react"
import { Mail, Bug, Lightbulb } from "lucide-react"
import { useFeedback } from "@/hooks/useFeedback"
import type { FeedbackData } from "@/types/student"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function FeedbackForm() {
  const {
    feedbackType,
    setFeedbackType,
    feedbackTitle,
    setFeedbackTitle,
    feedbackDescription,
    setFeedbackDescription,
    feedbackEmail,
    setFeedbackEmail,
    feedbackSubmitted,
    submitFeedback,
  } = useFeedback()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const data: FeedbackData = {
      type: feedbackType,
      title: feedbackTitle,
      description: feedbackDescription,
      email: feedbackEmail || undefined,
    }

    await submitFeedback(data)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Mail className="h-5 w-5" />
          Reportar Error o Sugerir Mejora
        </CardTitle>
        <CardDescription>
          Ayúdanos a mejorar la aplicación reportando errores o sugiriendo
          nuevas funcionalidades
        </CardDescription>
      </CardHeader>
      <CardContent>
        {feedbackSubmitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-green-600 mb-2">
              ¡Gracias por tu feedback!
            </h3>
            <p className="text-sm text-gray-600">
              Tu mensaje ha sido enviado correctamente. Te contactaremos pronto.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label>Tipo de feedback</Label>
              <div className="flex gap-4 mt-2">
                <Button
                  type="button"
                  variant={feedbackType === "bug" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFeedbackType("bug")}
                  className="flex items-center gap-2"
                >
                  <Bug className="h-4 w-4" />
                  Reportar Error
                </Button>
                <Button
                  type="button"
                  variant={feedbackType === "feature" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFeedbackType("feature")}
                  className="flex items-center gap-2"
                >
                  <Lightbulb className="h-4 w-4" />
                  Sugerir Mejora
                </Button>
              </div>
            </div>

            <div>
              <Label htmlFor="feedback-title">
                {feedbackType === "bug"
                  ? "Título del error"
                  : "Título de la sugerencia"}
              </Label>
              <Input
                id="feedback-title"
                placeholder={
                  feedbackType === "bug"
                    ? "ej: Error al calcular porcentajes"
                    : "ej: Agregar exportación a Excel"
                }
                value={feedbackTitle}
                onChange={(e) => setFeedbackTitle(e.target.value)}
                required
              />
            </div>

            <div>
              <Label htmlFor="feedback-description">
                Descripción detallada
              </Label>
              <Textarea
                id="feedback-description"
                placeholder={
                  feedbackType === "bug"
                    ? "Describe el error que encontraste y los pasos para reproducirlo..."
                    : "Describe la funcionalidad que te gustaría ver implementada..."
                }
                value={feedbackDescription}
                onChange={(e) => setFeedbackDescription(e.target.value)}
                required
                rows={4}
              />
            </div>

            <div>
              <Label htmlFor="feedback-email">Email (opcional)</Label>
              <Input
                id="feedback-email"
                type="email"
                placeholder="tu@email.com"
                value={feedbackEmail}
                onChange={(e) => setFeedbackEmail(e.target.value)}
              />
            </div>

            <Button type="submit" className="w-full">
              <Mail className="h-4 w-4 mr-2" />
              Enviar Feedback
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  )
}
