import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { favorite } from '../reducers/favorite'
import styled from 'styled-components/macro'

const Icon = styled.button`
  background: none;
  border: none;
  margin: 0;
  padding: 0;
  outline: none;
`

const BlackHeart = styled.svg`
  fill: none;
  stroke: black;
  stroke-location: inside;
  stroke-width: 2px;
  transition: all .25s ease-in-out;
  -moz-transition: all .25s ease-in-out;
  -webkit-transition: all .25s ease-in-out;

&:hover {
  fill: #CDA2AB;
  stroke: none;
}
`

const RedHeart = styled.svg`
  fill: #CDA2AB;
  transition: all .25s ease-in-out;
  -moz-transition: all .25s ease-in-out;
  -webkit-transition: all .25s ease-in-out;

&:hover {
  // fill: none;
  // stroke: black;
  // stroke-width: 2;
}
`

export const HeartIcon = ({ product }) => {
  const dispatch = useDispatch()

  const itemFavorite = useSelector((store) => store.favorite.favoriteItems.find((item) => item.sys.id === product.sys.id))

  const toggleFavorite = () => {
    dispatch(favorite.actions.saveFavorite(product))
  }
  const toggleRemoveFavorite = () => {
    dispatch(favorite.actions.removeFavorite(product))
  }

  return (
    <div>{itemFavorite ?
      <Icon
        type="button"
        onClick={toggleRemoveFavorite}>
        <RedHeart width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 46.12"><path d="M26.18,49.06a1,1,0,0,1-.7-.28s-4.27-4.13-21.18-21l-.11-.11c-.14-.14-.2-.21-.26-.28A14.49,14.49,0,0,1,14.5,2.94,14.37,14.37,0,0,1,26,8.63,14.49,14.49,0,1,1,47.39,28s0,0-.07.08c-17,17-20.38,20.61-20.41,20.64a1,1,0,0,1-.71.32Z" transform="translate(0 -2.94)" /></RedHeart>
      </Icon>
      :
      <Icon
        type="button"
        onClick={toggleFavorite}>
        <BlackHeart width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 46.12"><path d="M26.18,49.06a1,1,0,0,1-.7-.28s-4.27-4.13-21.18-21l-.11-.11c-.14-.14-.2-.21-.26-.28A14.49,14.49,0,0,1,14.5,2.94,14.37,14.37,0,0,1,26,8.63,14.49,14.49,0,1,1,47.39,28s0,0-.07.08c-17,17-20.38,20.61-20.41,20.64a1,1,0,0,1-.71.32Z" transform="translate(0 -2.94)" /></BlackHeart>
      </Icon>}
    </div>
  )
}