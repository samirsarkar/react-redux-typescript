import { useState, useCallback } from "react"
import axiosInstance from "../api/axiosInstance"
import { handleApiError } from "../utils/errorHandler"

export enum FetchStatus {
  IDLE = "idle",
  LOADING = "loading",
  SUCCESS = "succeeded",
  ERROR = "failed",
}

export const useApi = <T>(endpoint: string, baseURL: string) => {
  const [data, setData] = useState<T | null>(null)
  const [status, setStatus] = useState<FetchStatus>(FetchStatus.IDLE)
  const [error, setError] = useState<string | null>(null)

  const fetchData = useCallback(async () => {
    setStatus(FetchStatus.LOADING)
    try {
      const response = await axiosInstance.get<T>(`${baseURL}${endpoint}`)
      setData(response.data)
      setStatus(FetchStatus.SUCCESS)
    } catch (err) {
      setError(handleApiError(err))
      setStatus(FetchStatus.ERROR)
    }
  }, [endpoint, baseURL])

  return { data, status, error, fetchData }
}
