import { createSlice } from "@reduxjs/toolkit";
import ls from "local-storage";

const initialState = {
  data: [],
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrderData: (state, action) => { 
      state.data = [...state.data, action.payload];
    },
    deleteOrderData: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload);
    },
    resetOrderData: (state) => {
      state.data = [];
    }
  },
});

// Action creators are generated for each case reducer function
export const { addOrderData, deleteOrderData, resetOrderData } = orderSlice.actions;

export const selectOrderData = (state) => state.order.data;

export default orderSlice.reducer;
