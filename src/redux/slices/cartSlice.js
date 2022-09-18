import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalPrice: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price + sum ;
        }, 0);
    },
    removeItem(state, action) {
        state.items = state.items.filter((obj) => obj.id !== action.payload && obj.size !== action.payload);
        // state.totalPrice = state.items.reduce((sum, obj) => {
        //     return sum - obj.price ;
        //     }, 0);
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
