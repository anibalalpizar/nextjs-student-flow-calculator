"use client"

import { useState } from "react"
import type { FeedbackData } from "@/types/student"

export function useFeedback() {
  const [feedbackType, setFeedbackType] = useState<"bug" | "feature">("bug")
  const [feedbackTitle, setFeedbackTitle] = useState("")
  const [feedbackDescription, setFeedbackDescription] = useState("")
  const [feedbackEmail, setFeedbackEmail] = useState("")
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false)

  const submitFeedback = async (data: FeedbackData) => {
    try {
      // TODO: Replace with actual API call
      console.log("Feedback submitted:", data)

      setFeedbackSubmitted(true)

      setTimeout(() => {
        resetForm()
      }, 3000)

      return { success: true }
    } catch (error) {
      console.error("Error submitting feedback:", error)
      return { success: false, error }
    }
  }

  const resetForm = () => {
    setFeedbackSubmitted(false)
    setFeedbackTitle("")
    setFeedbackDescription("")
    setFeedbackEmail("")
  }

  return {
    feedbackType,
    setFeedbackType,
    feedbackTitle,
    setFeedbackTitle,
    feedbackDescription,
    setFeedbackDescription,
    feedbackEmail,
    setFeedbackEmail,
    feedbackSubmitted,
    submitFeedback,
    resetForm,
  }
}
