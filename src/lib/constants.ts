import type { StudyPeriod } from "@/types/student"

export const DEFAULT_PERIODS: StudyPeriod[] = [
  { id: "1", name: "Cuatrimestre 1", students: 140 },
  { id: "2", name: "Cuatrimestre 2", students: 120 },
  { id: "3", name: "Cuatrimestre 3", students: 90 },
  { id: "4", name: "Cuatrimestre 4", students: 93 },
]

export const RETENTION_THRESHOLDS = {
  EXCELLENT: 80,
  GOOD: 60,
} as const

export const DEVELOPER_INFO = {
  name: "Aníbal Alpízar",
  role: "Desarrollador Full Stack",
  github: "https://github.com/anibalalpizar",
  technologies: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "shadcn/ui",
    "Recharts",
  ],
} as const
