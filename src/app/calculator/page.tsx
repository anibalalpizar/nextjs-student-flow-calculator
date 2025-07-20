"use client"

import { GraduationCap, Plus, Calculator, BarChart3, Users } from "lucide-react"
import { useStudentFlow } from "@/hooks/useStudentFlow"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PeriodForm } from "@/components/calculator/period-form"
import { PeriodList } from "@/components/calculator/period-list"
import { DataTable } from "@/components/calculator/data-table"
import { StudentCharts } from "@/components/charts/student-charts"
import { StatisticsSummary } from "@/components/calculator/statistics-summary"

export default function CalculatorPage() {
  const { periods, statistics, addPeriod, removePeriod, updatePeriod } =
    useStudentFlow()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2">
            <GraduationCap className="h-8 w-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">
              Calculador de Flujo Estudiantil
            </h1>
          </div>
          <p className="text-gray-600">
            Analiza la retención y fluctuación de estudiantes a lo largo de la
            carrera universitaria
          </p>
        </div>

        <Tabs defaultValue="config" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="config" className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Configuración
            </TabsTrigger>
            <TabsTrigger value="table" className="flex items-center gap-2">
              <Calculator className="h-4 w-4" />
              Tabla de Datos
            </TabsTrigger>
            <TabsTrigger value="charts" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Gráficos
            </TabsTrigger>
            <TabsTrigger value="summary" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Resumen
            </TabsTrigger>
          </TabsList>

          <TabsContent value="config" className="space-y-6">
            <PeriodForm onAddPeriod={addPeriod} />
            <PeriodList
              periods={periods}
              onUpdatePeriod={updatePeriod}
              onRemovePeriod={removePeriod}
            />
          </TabsContent>

          <TabsContent value="table">
            <DataTable flowData={statistics.flowData} />
          </TabsContent>

          <TabsContent value="charts">
            <StudentCharts
              flowData={statistics.flowData}
              initialStudents={statistics.initialStudents}
            />
          </TabsContent>

          <TabsContent value="summary">
            <StatisticsSummary {...statistics} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
