import { createSlice } from '@reduxjs/toolkit'

const newGame = {
  squares: [
    {
      value: 1,
    }, {
      value: 2,
    }, {
      value: 3,
    }, {
      value: 4,
    }, {
      value: 5,
    }, {
      value: 6,
    }, {
      value: 7,
    }, {
      value: 8,
    }, {
      value: 9,
    }, {
      value: 10,
    }, {
      value: 11,
    }, {
      value: 12,
    }, {
      value: 13,
    }, {
      value: 14,
    }, {
      value: 15,
    },
  ]
}

// Print out the value in each tile
// Make the game render random order of the tiles
// Find the tiles that are next to the empty space 
// Set the finished game


export const game = createSlice({
  name: 'game',
  initialState: newGame,
  reducers: {
    captureSquare: (state, action) => {
      const { index } = action.payload

      if (state.squares[index] === null) {
        state.squares[index] = state.player
      }
    },
    restart: () => {
      return newGame
    }
  }
})
