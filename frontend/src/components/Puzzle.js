import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Square } from 'components/Square'


const Board = styled.div`
  display: grid;
  grid-template-columns: 100px 100px 100px 100px;
  grid-template-rows: 100px 100px 100px 100px;
  border: 3px solid red;
`

export const Puzzle = () => {

  const squares = useSelector((store) => store.game.squares)

  return (
    <Board>
      {squares.map((value, index) => (
        <Square key={index} value={value} index={index} />
      ))}
    </Board>
  )
}