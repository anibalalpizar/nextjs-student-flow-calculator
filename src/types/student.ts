export interface StudyPeriod {
  id: string
  name: string
  students: number
}

export interface FlowData extends StudyPeriod {
  previousStudents: number
  studentsDiff: number
  isIncrease: boolean
  isDecrease: boolean
  retentionRate: number
  dropoutRate: number
  increaseRate: number
  shortName: string
}

export interface FeedbackData {
  type: "bug" | "feature"
  title: string
  description: string
  email?: string
}
