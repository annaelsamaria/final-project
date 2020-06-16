import { createSlice } from '@reduxjs/toolkit'

export const cart = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    favoriteItems: []
  },
  reducers: {
    addItem: (state, action) => {
      const existingProduct = state.items.find((item) => item.id === action.payload.id)
      if (existingProduct) {
        existingProduct.quantity += 0
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      }
    },
    removeItem: (state, action) => {
      const existingProduct = state.items.find((item) => item.id === action.payload.id)

      if (existingProduct && existingProduct.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== action.payload.id)
      } else if (existingProduct) {
        existingProduct.quantity -= 1
      }
    },
    saveFavorite: (state, action) => {
      const existingProduct = state.favoriteItems.find((item) => item.id === action.payload.id)

      if (existingProduct) {
        existingProduct.quantity += 0
      } else {
        state.favoriteItems.push({ ...action.payload, quantity: 1 })
      }
    },
  }
})