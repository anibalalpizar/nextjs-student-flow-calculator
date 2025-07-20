"use client"

import type React from "react"
import { useState } from "react"
import { Plus } from "lucide-react"

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

interface PeriodFormProps {
  onAddPeriod: (name: string, students: number) => boolean
}

export function PeriodForm({ onAddPeriod }: PeriodFormProps) {
  const [newPeriodName, setNewPeriodName] = useState("")
  const [newPeriodStudents, setNewPeriodStudents] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const success = onAddPeriod(
      newPeriodName,
      Number.parseInt(newPeriodStudents)
    )
    if (success) {
      setNewPeriodName("")
      setNewPeriodStudents("")
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Plus className="h-5 w-5" />
          Agregar Nuevo Período
        </CardTitle>
        <CardDescription>
          Define cuatrimestres o cursos específicos
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex gap-4 items-end">
          <div className="flex-1">
            <Label htmlFor="period-name">Nombre del Período</Label>
            <Input
              id="period-name"
              placeholder="ej: Cuatrimestre 4, Programación VI"
              value={newPeriodName}
              onChange={(e) => setNewPeriodName(e.target.value)}
              required
            />
          </div>
          <div className="w-40">
            <Label htmlFor="period-students">Número de Estudiantes</Label>
            <Input
              id="period-students"
              type="number"
              min="0"
              placeholder="0"
              value={newPeriodStudents}
              onChange={(e) => setNewPeriodStudents(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
            <Plus className="h-4 w-4 mr-2" />
            Agregar
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
