import { createSlice } from '@reduxjs/toolkit'


export const ui = createSlice({
  name: 'ui',
  initialState: {
    openCart: false,
  },
  reducers: {
    openCart: (state, action) => {
      state.openCart = true
    },
    closeCart: (state, action) => {
      state.openCart = false
    },
  }
})