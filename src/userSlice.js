import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import userAPI  from './userAPI'

// First, create the thunk
const fetchAll = createAsyncThunk(
  'users/fetchAll',
  async (limit, thunkAPI) => {
    const response = await userAPI.fetchAll(limit)
    return response.data
  }
)

// Then, handle actions in your reducers:
const usersSlice = createSlice({
  name: 'users',
  initialState: { entities: [], loading: 'idle' },
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchAll.fulfilled, (state, action) => {
      // Add user to the state array
      state.entities = action.payload;
    })
  },
})

export { fetchAll }
export default usersSlice.reducer