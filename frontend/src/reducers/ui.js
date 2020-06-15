import { createSlice } from '@reduxjs/toolkit'



export const ui = createSlice({
  name: 'ui',
  initialState: {
    openCart: false,
    favoriteItems: []
  },
  reducers: {
    openCart: (state, action) => {
      //Spreada resultatet
      //uppdatera openCart = true

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