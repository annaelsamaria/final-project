import React from 'react'
import { logout } from '../reducers/user'
import { useDispatch, useSelector } from 'react-redux'
import { ProductCard } from '../components/ProductCard'
import { Button } from '../lib/Button'
import styled from 'styled-components/macro'
import { SecondTitle } from '../lib/Text'

const ProfilePage = styled.section`
  min-height: 80vh;
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
      <SecondTitle>Welcome {firstName}</SecondTitle>
      <p>This is your page</p>
      <Button type='submit' onClick={(e) => dispatch(logout())}>
        Log out
      </Button>
      <h2>Your saved items: </h2>
      <ProductsContainer>
        {favoriteProducts.map((product) => (
          <ProductCard key={product.sys.id} product={product} />
        ))}
      </ProductsContainer>
    </ProfilePage>
  )
}
