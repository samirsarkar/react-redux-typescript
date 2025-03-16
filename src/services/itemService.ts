import axiosInstance from "../api/axiosInstance"
import { handleApiError } from "../utils/errorHandler"

export const fetchItemsService = async (page: number, search: string = "") => {
  try {
    return await axiosInstance.get(
      `/posts?_page=${page}&_limit=10${
        search ? `&_search=${encodeURIComponent(search)}` : ""
      }`
    )
  } catch (error) {
    throw new Error(handleApiError(error))
  }
}

export const fetchItemDetailsService = async (id: number) => {
  try {
    return await axiosInstance.get(`/posts/${id}`)
  } catch (error) {
    throw new Error(handleApiError(error))
  }
}
