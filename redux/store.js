import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./features/auth"
import orderReducer from "./features/order"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    order: orderReducer
  },
})