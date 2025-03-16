import axios from "axios"

export const handleApiError = (error: unknown): string => {
  if (axios.isAxiosError(error)) {
    return error.response?.data?.message || "An API error occurred"
  }
  return "An unknown error occurred"
}
