"use client"

import { BarChart3 } from "lucide-react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  ReferenceLine,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
} from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { FlowData } from "@/types/student"

interface StudentChartsProps {
  flowData: FlowData[]
  initialStudents: number
}

// Paleta de colores moderna y profesional
const COLORS = {
  primary: "#3B82F6", // Azul vibrante
  secondary: "#10B981", // Verde esmeralda
  accent: "#F59E0B", // Ámbar
  danger: "#EF4444", // Rojo coral
  purple: "#8B5CF6", // Púrpura
  teal: "#14B8A6", // Teal
  rose: "#F43F5E", // Rosa
  indigo: "#6366F1", // Índigo
}

const GRADIENTS = {
  blue: "url(#blueGradient)",
  green: "url(#greenGradient)",
  orange: "url(#orangeGradient)",
  purple: "url(#purpleGradient)",
}

export function StudentCharts({
  flowData,
  initialStudents,
}: StudentChartsProps) {
  if (flowData.length === 0) {
    return (
      <Card>
        <CardContent className="text-center py-12">
          <BarChart3 className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">No hay datos para mostrar gráficos.</p>
          <p className="text-sm text-gray-400">
            Configura períodos en la primera pestaña.
          </p>
        </CardContent>
      </Card>
    )
  }

  // Datos para el gráfico de distribución
  const distributionData = [
    {
      name: "Estudiantes Activos",
      value: flowData[flowData.length - 1]?.students || 0,
      color: COLORS.primary,
    },
    {
      name: "Estudiantes Perdidos",
      value: Math.max(
        0,
        initialStudents - (flowData[flowData.length - 1]?.students || 0)
      ),
      color: COLORS.danger,
    },
  ]

  // Custom tooltip para mejor presentación
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-semibold text-gray-800">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} style={{ color: entry.color }} className="text-sm">
              {entry.name}: {entry.value}
            </p>
          ))}
        </div>
      )
    }
    return null
  }

  return (
    <div className="space-y-6">
      {/* Definir gradientes SVG */}
      <svg width="0" height="0">
        <defs>
          <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={COLORS.primary} stopOpacity={0.8} />
            <stop offset="100%" stopColor={COLORS.primary} stopOpacity={0.1} />
          </linearGradient>
          <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={COLORS.secondary} stopOpacity={0.8} />
            <stop
              offset="100%"
              stopColor={COLORS.secondary}
              stopOpacity={0.1}
            />
          </linearGradient>
          <linearGradient id="orangeGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={COLORS.accent} stopOpacity={0.8} />
            <stop offset="100%" stopColor={COLORS.accent} stopOpacity={0.1} />
          </linearGradient>
          <linearGradient id="purpleGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={COLORS.purple} stopOpacity={0.8} />
            <stop offset="100%" stopColor={COLORS.purple} stopOpacity={0.1} />
          </linearGradient>
        </defs>
      </svg>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Gráfico de barras mejorado */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-600"></div>
              Estudiantes por Período
            </CardTitle>
            <CardDescription>
              Evolución del número de estudiantes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={flowData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis
                  dataKey="shortName"
                  tick={{ fontSize: 12 }}
                  stroke="#6B7280"
                />
                <YAxis tick={{ fontSize: 12 }} stroke="#6B7280" />
                <Tooltip content={<CustomTooltip />} />
                <Bar
                  dataKey="students"
                  fill={GRADIENTS.blue}
                  radius={[4, 4, 0, 0]}
                />
                <ReferenceLine
                  y={initialStudents}
                  stroke={COLORS.accent}
                  strokeDasharray="5 5"
                  strokeWidth={2}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Gráfico de fluctuación mejorado */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500"></div>
              Fluctuación de Estudiantes
            </CardTitle>
            <CardDescription>
              Incrementos y decrementos entre períodos
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={flowData.slice(1)}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis
                  dataKey="shortName"
                  tick={{ fontSize: 12 }}
                  stroke="#6B7280"
                />
                <YAxis tick={{ fontSize: 12 }} stroke="#6B7280" />
                <Tooltip content={<CustomTooltip />} />
                <Bar
                  dataKey="studentsDiff"
                  fill={(entry) =>
                    entry.studentsDiff > 0 ? COLORS.secondary : COLORS.danger
                  }
                  radius={[4, 4, 4, 4]}
                />
                <ReferenceLine y={0} stroke="#374151" strokeWidth={2} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Gráfico de línea de tendencia mejorado */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500"></div>
              Tendencia de Estudiantes
            </CardTitle>
            <CardDescription>
              Evolución temporal del flujo estudiantil
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                data={flowData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis
                  dataKey="shortName"
                  tick={{ fontSize: 12 }}
                  stroke="#6B7280"
                />
                <YAxis tick={{ fontSize: 12 }} stroke="#6B7280" />
                <Tooltip content={<CustomTooltip />} />
                <Line
                  type="monotone"
                  dataKey="students"
                  stroke={COLORS.purple}
                  strokeWidth={3}
                  dot={{ fill: COLORS.purple, strokeWidth: 2, r: 6 }}
                  activeDot={{ r: 8, fill: COLORS.indigo }}
                />
                <ReferenceLine
                  y={initialStudents}
                  stroke={COLORS.accent}
                  strokeDasharray="5 5"
                  strokeWidth={2}
                  label={{ value: "Inicial", position: "topRight" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Gráfico de distribución (pie chart) */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-500"></div>
              Distribución Final
            </CardTitle>
            <CardDescription>
              Proporción de estudiantes activos vs perdidos
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={distributionData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {distributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value, name) => [value, name]}
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid #E5E7EB",
                    borderRadius: "8px",
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-6 mt-4">
              {distributionData.map((entry, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: entry.color }}
                  ></div>
                  <span className="text-sm text-gray-600">{entry.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Gráfico de área grande */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500"></div>
            Área de Retención Estudiantil
          </CardTitle>
          <CardDescription>
            Visualización completa del flujo estudiantil a lo largo del tiempo
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart
              data={flowData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis
                dataKey="shortName"
                tick={{ fontSize: 12 }}
                stroke="#6B7280"
              />
              <YAxis tick={{ fontSize: 12 }} stroke="#6B7280" />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="students"
                stroke={COLORS.teal}
                strokeWidth={3}
                fill={GRADIENTS.green}
              />
              <ReferenceLine
                y={initialStudents}
                stroke={COLORS.accent}
                strokeDasharray="5 5"
                strokeWidth={2}
                label={{ value: "Línea Base Inicial", position: "topRight" }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}
