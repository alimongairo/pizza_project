import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categoryID: 0,
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryID(state, action) {
      state.categoryID = action.payload;
    }
  },
})

export const { setCategoryID } = filterSlice.actions;

export default filterSlice.reducer;