import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { FetchStatus } from "../../hooks/useApi"
import { handleApiError } from "../../utils/errorHandler"
import {
  fetchItemsService,
  fetchItemDetailsService,
} from "../../services/itemService"
import { Item } from "./ItemTypes"

interface ItemState {
  data: Item[]
  selectedItem: Item | null
  status: FetchStatus
  error: string | null
  page: number
}

const initialState: ItemState = {
  data: [],
  selectedItem: null,
  status: FetchStatus.IDLE,
  error: null,
  page: 1,
}

export const fetchItems = createAsyncThunk<
  Item[],
  { page: number; search?: string }
>("items/fetchItems", async ({ page, search }, { rejectWithValue }) => {
  try {
    const response = await fetchItemsService(page, search)
    return response.data
  } catch (error) {
    return rejectWithValue(handleApiError(error))
  }
})

export const fetchItemDetails = createAsyncThunk<Item, number>(
  "items/fetchItemDetails",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await fetchItemDetailsService(id)
      return data
    } catch (error) {
      return rejectWithValue(handleApiError(error))
    }
  }
)

const itemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.status = FetchStatus.LOADING
      })
      .addCase(fetchItems.fulfilled, (state, action: PayloadAction<Item[]>) => {
        state.status = FetchStatus.SUCCESS
        state.data = action.payload
        state.selectedItem = null
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.status = FetchStatus.ERROR
        state.error = (action.payload as string) || "Error fetching items"
      })
      .addCase(
        fetchItemDetails.fulfilled,
        (state, action: PayloadAction<Item>) => {
          state.selectedItem = action.payload
        }
      )
  },
})
export default itemSlice.reducer
