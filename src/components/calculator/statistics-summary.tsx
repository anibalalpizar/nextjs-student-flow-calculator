"use client"

import { Users, TrendingDown, ArrowUp, ArrowDown } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface StatisticsSummaryProps {
  initialStudents: number
  finalStudents: number
  totalRetentionRate: number
  periodsWithIncrease: number
  periodsWithDecrease: number
  largestIncrease: number
  largestDecrease: number
}

export function StatisticsSummary({
  initialStudents,
  finalStudents,
  totalRetentionRate,
  periodsWithIncrease,
  periodsWithDecrease,
  largestIncrease,
  largestDecrease,
}: StatisticsSummaryProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Estadísticas Generales
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border border-blue-200">
              <span className="text-gray-700 font-medium">
                Estudiantes Iniciales
              </span>
              <span className="text-2xl font-bold text-blue-600">
                {initialStudents}
              </span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-lg border border-emerald-200">
              <span className="text-gray-700 font-medium">
                Estudiantes Finales
              </span>
              <span className="text-2xl font-bold text-emerald-600">
                {finalStudents}
              </span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg border border-purple-200">
              <span className="text-gray-700 font-medium">Diferencia Neta</span>
              <div className="flex items-center gap-2">
                {finalStudents > initialStudents ? (
                  <ArrowUp className="h-5 w-5 text-emerald-600" />
                ) : finalStudents < initialStudents ? (
                  <ArrowDown className="h-5 w-5 text-red-500" />
                ) : null}
                <span
                  className={`text-2xl font-bold ${
                    finalStudents > initialStudents
                      ? "text-emerald-600"
                      : finalStudents < initialStudents
                      ? "text-red-500"
                      : "text-gray-600"
                  }`}
                >
                  {finalStudents > initialStudents ? "+" : ""}
                  {finalStudents - initialStudents}
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center p-4 bg-gradient-to-r from-amber-50 to-amber-100 rounded-lg border border-amber-200">
              <span className="text-gray-700 font-medium">Tasa Final</span>
              <span className="text-2xl font-bold text-amber-600">
                {totalRetentionRate.toFixed(1)}%
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingDown className="h-5 w-5" />
            Análisis de Fluctuación
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200">
                <h4 className="font-semibold mb-2 text-emerald-700">
                  Períodos con Incremento
                </h4>
                <div className="text-3xl font-bold text-emerald-600">
                  {periodsWithIncrease}
                </div>
                {periodsWithIncrease > 0 && (
                  <div className="mt-2 text-sm text-emerald-700">
                    Mayor incremento: +{largestIncrease} estudiantes
                  </div>
                )}
              </div>
              <div className="p-4 border rounded-lg bg-gradient-to-br from-red-50 to-rose-50 border-red-200">
                <h4 className="font-semibold mb-2 text-red-700">
                  Períodos con Decremento
                </h4>
                <div className="text-3xl font-bold text-red-600">
                  {periodsWithDecrease}
                </div>
                {periodsWithDecrease > 0 && (
                  <div className="mt-2 text-sm text-red-700">
                    Mayor decremento: -{largestDecrease} estudiantes
                  </div>
                )}
              </div>
            </div>

            <div className="p-4 border rounded-lg bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200">
              <h4 className="font-semibold mb-3 text-indigo-700">
                Observaciones del Análisis
              </h4>
              <div className="space-y-2 text-sm text-gray-700">
                <p>
                  {finalStudents > initialStudents
                    ? "✅ La carrera muestra un crecimiento neto en el número de estudiantes."
                    : finalStudents < initialStudents
                    ? finalStudents >= initialStudents * 0.8
                      ? "⚠️ La retención estudiantil es buena, con pérdida moderada."
                      : "🚨 Hay una pérdida significativa de estudiantes que requiere atención."
                    : "📊 El número de estudiantes se ha mantenido estable."}
                </p>
                {periodsWithIncrease > 0 && (
                  <p className="text-emerald-700">
                    📈 Se observan {periodsWithIncrease} período(s) con
                    incremento de estudiantes, indicando reincorporaciones o
                    transferencias.
                  </p>
                )}
                {periodsWithDecrease > 0 && (
                  <p className="text-red-700">
                    📉 Se registran {periodsWithDecrease} período(s) con
                    decremento que requieren análisis detallado.
                  </p>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
