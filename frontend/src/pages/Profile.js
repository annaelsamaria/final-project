import React from 'react'
import { logout, getLoginMessage } from '../reducers/user'
import { useDispatch, useSelector } from 'react-redux'
import { ProductCard } from '../components/ProductCard'
import { Button } from '../lib/Button'
import styled from 'styled-components/macro'

const ProfilePage = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ProductsContainer = styled.section`
  // width: 80%;
  display: flex;
  justify-content: center;
  flex-flow: wrap;
`

export const Profile = () => {
  const dispatch = useDispatch();
  const favoriteProducts = useSelector((store) => store.favorite.favoriteItems)
  const firstName = useSelector((store) => store.user.login.firstName)


  return (
    <ProfilePage>
      <h2>Welcome {firstName}</h2>
      <p>This is your page</p>
      <Button type='submit' onClick={(e) => dispatch(logout())}>
        Log out
      </Button>
      <h2>Your saved items: </h2>
      <ProductsContainer>
        {favoriteProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductsContainer>
    </ProfilePage>
  )
}
