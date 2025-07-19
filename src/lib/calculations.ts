import type { StudyPeriod, FlowData } from "@/types/student"

export function calculateFlowData(periods: StudyPeriod[]): FlowData[] {
  return periods.map((period, index) => {
    const previousStudents =
      index === 0 ? period.students : periods[index - 1].students
    const currentStudents = period.students
    const studentsDiff = index === 0 ? 0 : currentStudents - previousStudents
    const isIncrease = studentsDiff > 0
    const isDecrease = studentsDiff < 0

    let retentionRate = 100
    let dropoutRate = 0
    let increaseRate = 0

    if (index > 0) {
      if (isDecrease) {
        retentionRate = (currentStudents / previousStudents) * 100
        dropoutRate = (Math.abs(studentsDiff) / previousStudents) * 100
      } else if (isIncrease) {
        retentionRate = 100
        increaseRate = (studentsDiff / previousStudents) * 100
      } else {
        retentionRate = 100
      }
    }

    return {
      ...period,
      previousStudents: index === 0 ? currentStudents : previousStudents,
      studentsDiff,
      isIncrease,
      isDecrease,
      retentionRate,
      dropoutRate,
      increaseRate,
      shortName:
        period.name.length > 15
          ? period.name.substring(0, 12) + "..."
          : period.name,
    }
  })
}

export function calculateStatistics(periods: StudyPeriod[]) {
  const finalStudents =
    periods.length > 0 ? periods[periods.length - 1].students : 0
  const initialStudents = periods.length > 0 ? periods[0].students : 0
  const totalRetentionRate =
    initialStudents > 0 ? (finalStudents / initialStudents) * 100 : 0

  const flowData = calculateFlowData(periods)
  const periodsWithIncrease = flowData.filter((p) => p.isIncrease).length
  const periodsWithDecrease = flowData.filter((p) => p.isDecrease).length
  const largestIncrease = flowData.reduce(
    (max, p) => (p.isIncrease && p.studentsDiff > max ? p.studentsDiff : max),
    0
  )
  const largestDecrease = flowData.reduce(
    (max, p) =>
      p.isDecrease && Math.abs(p.studentsDiff) > max
        ? Math.abs(p.studentsDiff)
        : max,
    0
  )

  return {
    finalStudents,
    initialStudents,
    totalRetentionRate,
    periodsWithIncrease,
    periodsWithDecrease,
    largestIncrease,
    largestDecrease,
    flowData,
  }
}
