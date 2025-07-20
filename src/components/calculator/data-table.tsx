"use client"

import { ArrowUp, ArrowDown } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import type { FlowData } from "@/types/student"

interface DataTableProps {
  flowData: FlowData[]
}

export function DataTable({ flowData }: DataTableProps) {
  if (flowData.length === 0) {
    return (
      <Card>
        <CardContent className="text-center py-8 text-gray-500">
          No hay períodos configurados. Ve a la pestaña de Configuración para
          agregar períodos.
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Análisis Detallado por Período</CardTitle>
        <CardDescription>
          Datos completos de retención, deserción e incrementos estudiantiles
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Período</TableHead>
                <TableHead className="text-center">Est. Previos</TableHead>
                <TableHead className="text-center">Est. Actuales</TableHead>
                <TableHead className="text-center">Diferencia</TableHead>
                <TableHead className="text-center">Retención</TableHead>
                <TableHead className="text-center">
                  Deserción/Incremento
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {flowData.map((data, index) => (
                <TableRow
                  key={data.id}
                  className={index === 0 ? "bg-green-50" : ""}
                >
                  <TableCell className="font-medium">{data.name}</TableCell>
                  <TableCell className="text-center text-lg">
                    {data.previousStudents}
                  </TableCell>
                  <TableCell className="text-center font-bold text-lg text-blue-600">
                    {data.students}
                  </TableCell>
                  <TableCell className="text-center">
                    {data.studentsDiff !== 0 && (
                      <div className="flex items-center justify-center gap-1">
                        {data.isIncrease ? (
                          <ArrowUp className="h-4 w-4 text-green-600" />
                        ) : (
                          <ArrowDown className="h-4 w-4 text-red-600" />
                        )}
                        <span
                          className={`font-semibold ${
                            data.isIncrease ? "text-green-600" : "text-red-600"
                          }`}
                        >
                          {data.isIncrease ? "+" : "-"}
                          {Math.abs(data.studentsDiff)}
                        </span>
                      </div>
                    )}
                    {data.studentsDiff === 0 && (
                      <span className="text-gray-400">0</span>
                    )}
                  </TableCell>
                  <TableCell className="text-center">
                    <Badge
                      variant={
                        data.retentionRate >= 80
                          ? "default"
                          : data.retentionRate >= 60
                          ? "secondary"
                          : "destructive"
                      }
                      className={
                        data.retentionRate >= 80
                          ? "bg-green-600 hover:bg-green-700"
                          : data.retentionRate >= 60
                          ? "bg-yellow-600 hover:bg-yellow-700"
                          : ""
                      }
                    >
                      {data.retentionRate.toFixed(1)}%
                    </Badge>
                  </TableCell>
                  <TableCell className="text-center">
                    {data.isDecrease && (
                      <Badge
                        variant="outline"
                        className="text-red-600 border-red-200"
                      >
                        -{data.dropoutRate.toFixed(1)}%
                      </Badge>
                    )}
                    {data.isIncrease && (
                      <Badge
                        variant="outline"
                        className="text-green-600 border-green-200"
                      >
                        +{data.increaseRate.toFixed(1)}%
                      </Badge>
                    )}
                    {!data.isDecrease && !data.isIncrease && (
                      <span className="text-gray-400">0%</span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
