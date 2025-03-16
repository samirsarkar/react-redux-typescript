import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchItems } from "../redux/slices/itemSlice"
import { RootState, AppDispatch } from "../redux/store"

export const useFetchItems = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { data, status } = useSelector((state: RootState) => state.items)

  useEffect(() => {
    dispatch(fetchItems({}))
  }, [dispatch])
  return { data, status }
}
