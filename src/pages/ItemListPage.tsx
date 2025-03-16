import { useEffect, useState, useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchItems } from "../redux/slices/itemSlice"
import { RootState, AppDispatch } from "../redux/store"
import { useNavigate } from "react-router-dom"
import Loading from "../components/Loading"
import { RoutingPaths } from "../constants/constants"
import ItemList from "../components/ItemList"
import withLayout from "../hoc/withLayout"
import Button from "../components/Button"
import debounce from "lodash/debounce"

function ItemListPage() {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const [page, setPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState("")
  const [debouncedSearch, setDebouncedSearch] = useState("")

  const {
    data: items,
    status,
    error,
  } = useSelector((state: RootState) => state.items)

  // Debounce search term to reduce API calls
  const handleSearch = useCallback(
    debounce((query) => {
      setDebouncedSearch(query)
      setPage(1) // Reset to first page when searching
    }, 500),
    []
  )

  // Fetch items whenever page or search term changes
  useEffect(() => {
    dispatch(fetchItems({ page, search: debouncedSearch }))
  }, [dispatch, page, debouncedSearch])

  // Clear search input
  const clearSearch = () => {
    setSearchTerm("")
    setDebouncedSearch("")
    setPage(1)
  }

  if (status === "loading") return <Loading />
  if (error) return <p>Error: {error}</p>

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">List of Items</h1>

      {/* Search Input */}
      <div className="mb-4 flex justify-center items-center gap-2">
        <input
          type="text"
          placeholder="Search title..."
          className="p-2 border border-gray-300 rounded w-1/2"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value)
            handleSearch(e.target.value)
          }}
        />
        {searchTerm && <Button onClick={clearSearch}>Clear</Button>}
      </div>

      {/* Item List */}
      <div className="text-center">
        <ItemList
          data={items}
          onClick={(itemId) =>
            navigate(RoutingPaths.postItem.replace(":id", itemId.toString()))
          }
        />
      </div>

      {/* Pagination */}
      {items.length > 0 && (
        <div className="flex justify-center mt-4">
          <Button onClick={() => setPage((prev) => Math.max(prev - 1, 1))}>
            Prev
          </Button>
          <span className="p-2">{page}</span>
          <Button onClick={() => setPage((prev) => prev + 1)}>Next</Button>
        </div>
      )}
    </div>
  )
}

export default withLayout(ItemListPage)
