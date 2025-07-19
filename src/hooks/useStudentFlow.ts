"use client"

import { useState, useMemo } from "react"
import type { StudyPeriod } from "@/types/student"
import { calculateStatistics } from "@/lib/calculations"
import { DEFAULT_PERIODS } from "@/lib/constants"

export function useStudentFlow() {
  const [periods, setPeriods] = useState<StudyPeriod[]>(DEFAULT_PERIODS)

  const statistics = useMemo(() => calculateStatistics(periods), [periods])

  const addPeriod = (name: string, students: number) => {
    if (name && students >= 0) {
      const newPeriod: StudyPeriod = {
        id: Date.now().toString(),
        name,
        students,
      }
      setPeriods((prev) => [...prev, newPeriod])
      return true
    }
    return false
  }

  const removePeriod = (id: string) => {
    setPeriods((prev) => prev.filter((period) => period.id !== id))
  }

  const updatePeriod = (
    id: string,
    field: "name" | "students",
    value: string | number
  ) => {
    setPeriods((prev) =>
      prev.map((period) =>
        period.id === id
          ? {
              ...period,
              [field]:
                field === "students"
                  ? Number.parseInt(value.toString())
                  : value,
            }
          : period
      )
    )
  }

  const resetPeriods = () => {
    setPeriods(DEFAULT_PERIODS)
  }

  return {
    periods,
    statistics,
    addPeriod,
    removePeriod,
    updatePeriod,
    resetPeriods,
  }
}
