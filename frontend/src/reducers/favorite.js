import { createSlice } from '@reduxjs/toolkit'

export const favorite = createSlice({
  name: 'favorite',
  initialState: {
    favoriteItems: []
  },
  reducers: {
    saveFavorite: (state, action) => {
      const existingProduct = state.favoriteItems.find((item) => item.sys.id === action.payload.sys.id)
      if (existingProduct) {
        existingProduct.quantity += 0
      } else {
        const newArray = state.favoriteItems.slice()
        newArray.push({ ...action.payload, quantity: 1 })
        state.favoriteItems = newArray
      }
    },
    removeFavorite: (state, action) => {
      const existingProduct = state.favoriteItems.find((item) => item.sys.id === action.payload.sys.id)

      if (existingProduct && existingProduct.quantity === 1) {
        state.favoriteItems = state.favoriteItems.filter((item) => item.sys.id !== action.payload.sys.id)
      } else if (existingProduct) {
        existingProduct.quantity -= 1
      }
    },
  }
})