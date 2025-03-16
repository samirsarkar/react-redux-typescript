import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { fetchItemDetails } from "../redux/slices/itemSlice"
import { RootState, AppDispatch } from "../redux/store"
import Loading from "../components/Loading"
import ItemDetails from "../components/ItemDetail"
import withLayout from "../hoc/withLayout"

function ItemDetailPage() {
  const { id } = useParams()
  const dispatch = useDispatch<AppDispatch>()
  const item = useSelector((state: RootState) => state.items.selectedItem)
  const status = useSelector((state: RootState) => state.items.status)

  useEffect(() => {
    if (id) {
      dispatch(fetchItemDetails(Number(id)))
    }
  }, [dispatch, id])

  if (status === "loading") return <Loading />
  if (!item) return <p className="item-center">Item not found.</p>

  return (
    <div className="mx-auto max-w-[80%] p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Item Details</h1>
      <ItemDetails data={item} />
    </div>
  )
}

export default withLayout(ItemDetailPage)
