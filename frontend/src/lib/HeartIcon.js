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
  fill: red;
  transition: all .25s ease-in-out;
  -moz-transition: all .25s ease-in-out;
  -webkit-transition: all .25s ease-in-out;

&:hover {
  fill: black;
}
`

export const HeartIcon = ({ product }) => {
  const dispatch = useDispatch()
  const favoriteProducts = useSelector((store) => store.favorite.favoriteItems)

  const findOne = favoriteProducts.map((item) => item.sys.id)

  const toggleFavorite = () => {
    dispatch(favorite.actions.saveFavorite(product))
  }
  const toggleRemoveFavorite = () => {
    dispatch(favorite.actions.removeFavorite(product))
  }

  return (
    <div>
      {findOne === product.sys.id ?
        //Om den produkten man klickar på är i listan bland favorites?
        <Icon
          type="button"
          onClick={toggleRemoveFavorite}>
          <BlackHeart width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181" /></BlackHeart>
        </Icon> :
        <Icon
          type="button"
          onClick={toggleFavorite}>
          <RedHeart width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181" /></RedHeart>
        </Icon>
      }
    </div>
  )
}