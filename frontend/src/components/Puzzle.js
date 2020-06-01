import React, { useState } from 'react'
import styled from 'styled-components'

const Board = styled.div`
  display: grid;
  grid-template-columns: 70px 70px 70px 70px 70px 70px 70px 70px;
  grid-template-rows: 70px 70px 70px 70px 70px 70px 70px 70px;
  border: 3px solid red;
`

const Tile = styled.button`
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
  margin: 0;
  background-color: yellow;
  border: black;
`
export const Puzzle = () => {
  return (
    <Board>
      <Tile />
    </Board>
  )

}