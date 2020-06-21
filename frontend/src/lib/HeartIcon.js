import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { favorite } from '../reducers/favorite'
import styled from 'styled-components/macro';

const Icon = styled.button`
  background: none;
  border: none;
  margin: 0;
  padding: 0;
  outline: none;
`

const BlackHeart = styled.svg`
  fill: black;
  transition: all .25s ease-in-out;
  -moz-transition: all .25s ease-in-out;
  -webkit-transition: all .25s ease-in-out;

&:hover {
  fill: red;
}
`

const RedHeart = styled.svg`
  fill: #CDA2AB;
  transition: all .25s ease-in-out;
  -moz-transition: all .25s ease-in-out;
  -webkit-transition: all .25s ease-in-out;

&:hover {
  fill: none;
  stroke: black;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}
`

export const HeartIcon = ({ product }) => {
  const dispatch = useDispatch()
  const favoriteProducts = useSelector((store) => store.favorite.favoriteItems)


  const toggleFavorite = () => {
    dispatch(favorite.actions.saveFavorite(product))
  }
  const toggleRemoveFavorite = () => {
    dispatch(favorite.actions.removeFavorite(product))
  }

  return (
    <div>
      <Icon
        type="button"
        onClick={toggleFavorite}>
        <BlackHeart width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181" /></BlackHeart>
      </Icon>
      <Icon
        type="button"
        onClick={toggleRemoveFavorite}>
        <RedHeart width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 46.12"><path d="M26.18,49.06a1,1,0,0,1-.7-.28s-4.27-4.13-21.18-21l-.11-.11c-.14-.14-.2-.21-.26-.28A14.49,14.49,0,0,1,14.5,2.94,14.37,14.37,0,0,1,26,8.63,14.49,14.49,0,1,1,47.39,28s0,0-.07.08c-17,17-20.38,20.61-20.41,20.64a1,1,0,0,1-.71.32Z" transform="translate(0 -2.94)" /></RedHeart>
      </Icon>
    </div>
  )
}