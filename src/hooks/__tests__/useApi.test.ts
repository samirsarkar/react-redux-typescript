import { renderHook, act, waitFor } from "@testing-library/react"
import { useApi, FetchStatus } from "../useApi"
import axiosInstance from "../../api/axiosInstance"
import { vi } from "vitest"

vi.mock("../api/axiosInstance")

describe("useApi Hook", () => {
  test("fetchData updates state correctly", async () => {
    const mockData = [{ id: 1, title: "Test Item" }]

    vi.spyOn(axiosInstance, "get").mockResolvedValueOnce({ data: mockData })

    const { result } = renderHook(() => useApi("/posts", "http://example.com"))

    await act(async () => {
      await result.current.fetchData()
    })

    await waitFor(() => expect(result.current.status).toBe(FetchStatus.SUCCESS))
    await waitFor(() => expect(result.current.data).toEqual(mockData))
    await waitFor(() => expect(result.current.error).toBeNull())
  })

  test("fetchData handles API error correctly", async () => {
    const mockError = new Error("Network Error")

    vi.spyOn(axiosInstance, "get").mockRejectedValueOnce(mockError)

    const { result } = renderHook(() => useApi("/posts", "http://example.com"))

    await act(async () => {
      await result.current.fetchData()
    })

    await waitFor(() => expect(result.current.status).toBe(FetchStatus.ERROR))
    await waitFor(() => expect(result.current.data).toBeNull())
    await waitFor(() => expect(result.current.error).not.toBeNull())
  })
})
