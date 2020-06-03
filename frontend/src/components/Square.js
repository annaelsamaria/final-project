import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { game } from 'reducers/game'
import styled from 'styled-components'


const Tile = styled.button`
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
  margin: 0;
  background-color: pink;
  border: 3px solid yellow;
  border-radius: 10px;
`

export const Square = ({ index }) => {
  const dispatch = useDispatch()
  const square = useSelector((store) => store.game.squares[index])
  const handleClick = () => {
    dispatch(game.actions.captureSquare({ index }))
    // TODO send the captureSquare action
  }
  return (
    <Tile
      type="button"
      onClick={handleClick}
    >
      <h3>{square.name}</h3>
    </Tile>
  )
}
