import { createSlice } from '@reduxjs/toolkit'

const newGame = {
  squares: [
    {
      value: 1,
      name: '1',
    }, {
      value: 2,
      name: '2',
    }, {
      value: 3,
      name: '3',
    }, {
      value: 4,
      name: '4',
    }, {
      value: 5,
      name: '5',
    }, {
      value: 6,
      name: '6',
    }, {
      value: 7,
      name: '7',
    }, {
      value: 8,
      name: '8',
    }, {
      value: 9,
      name: '9',
    }, {
      value: 10,
      name: '10',
    }, {
      value: 11,
      name: '11',
    }, {
      value: 12,
      name: '12',
    }, {
      value: 13,
      name: '13',
    }, {
      value: 14,
      name: '14',
    }, {
      value: 15,
      name: '15',
    },
  ]
}

// Make the newGame render random order of the tiles


// Find the tiles that are next to the empty space
// Get the tiles to move into the empty space
// Mark the tiles that are in the right position
// Set and print out when the puzzle is solved


export const game = createSlice({
  name: 'game',
  initialState: newGame,
  reducers: {
    captureSquare: (state, action) => {
      const { index, value, name } = action.payload

    },
    restart: () => {
      return newGame
    }
  }
})
