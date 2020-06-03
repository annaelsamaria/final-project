import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Square } from 'components/Square'


const Board = styled.div`
  display: grid;
  grid-template-columns: 100px 100px;
  border: 3px solid red;
  padding: 20px;
`

const initialBoard = [
  ["A", null],
]

export const Puzzle = () => {
  const [board, setBoard] = useState(initialBoard)

  const getValueOfTile = (row, column) => {
    return board[row][column]
  }


  const handleTileClick = (rowIndex, columnIndex) => {
    console.log(rowIndex, columnIndex)
    if (
      rowIndex > 0 && getValueOfTile(rowIndex - 1, columnIndex) === null
    ) {
      return (
        console.log("yes")
      )
    }
  }

  return (
    <Board>
      {board.map((row, rowIndex) => (
        row.map((column, columnIndex) => (
          <button onClick={() => { handleTileClick(rowIndex, columnIndex) }}>{column}</button>
        ))
      ))}
    </Board>
  )
}

//  const squares = useSelector((store) => store.game.squares)
// <Board>
// {squares.map((value, index, name) => (
//   <Square key={index} value={value} index={index} name={name} />
// ))}
// </Board>