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
  const errorMessage = useSelector((store) => store.user.login.errorMessage)
  const loginMessage = useSelector((store) => store.user.login.loginMessage)
  const favoriteProducts = useSelector((store) => store.favorite.favoriteItems)
  const firstName = useSelector((store) => store.favorite.firstName)

  return (
    <ProfilePage>
      {errorMessage && <h4>Error Message : {`${errorMessage}`}</h4>}
      {loginMessage && <h4>{`Welcome ${loginMessage}`}</h4>}
      <h2>Welcome {firstName}</h2>
      <p>This is your page</p>
      <input
        type="submit"
        onClick={(e) => dispatch(getLoginMessage())}
        value="Test Secret Endpoint"
      />
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
