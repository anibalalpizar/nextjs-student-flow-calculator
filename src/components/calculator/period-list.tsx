"use client"

import { Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { StudyPeriod } from "@/types/student"

interface PeriodListProps {
  periods: StudyPeriod[]
  onUpdatePeriod: (
    id: string,
    field: "name" | "students",
    value: string | number
  ) => void
  onRemovePeriod: (id: string) => void
}

export function PeriodList({
  periods,
  onUpdatePeriod,
  onRemovePeriod,
}: PeriodListProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Períodos Configurados</CardTitle>
        <CardDescription>
          Edita o elimina los períodos académicos
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {periods.map((period, index) => (
            <div
              key={period.id}
              className="flex gap-4 items-center p-4 bg-white rounded-lg border shadow-sm"
            >
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                {index + 1}
              </div>
              <div className="flex-1">
                <Label className="text-xs text-gray-500">
                  Nombre del Período
                </Label>
                <Input
                  value={period.name}
                  onChange={(e) =>
                    onUpdatePeriod(period.id, "name", e.target.value)
                  }
                  className="font-medium"
                />
              </div>
              <div className="w-40">
                <Label className="text-xs text-gray-500">Estudiantes</Label>
                <Input
                  type="number"
                  min="0"
                  value={period.students}
                  onChange={(e) =>
                    onUpdatePeriod(period.id, "students", e.target.value)
                  }
                  className="text-center font-semibold"
                />
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={() => onRemovePeriod(period.id)}
                className="text-red-600 hover:text-red-700 hover:bg-red-50"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
