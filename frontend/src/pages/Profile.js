import React from 'react';
import { logout } from '../reducers/user';
import { useDispatch, useSelector } from 'react-redux';
import { ProductCard } from '../components/ProductCard'
import styled from 'styled-components/macro';


const ProductsContainer = styled.section`
  width: 80%;
  display: flex;
  justify-content: center;
  flex-flow: wrap;
`


export const Profile = () => {
  const dispatch = useDispatch();
  const errorMessage = useSelector((store) => store.user.login.errorMessage);
  const loginMessage = useSelector((store) => store.user.login.loginMessage);
  const favoriteProducts = useSelector((store) => store.cart.favoriteItems)

  return (
    <div>
      {errorMessage && <h4>Error Message : {`${errorMessage}`}</h4>}
      {loginMessage && <h4>{`${loginMessage}`}</h4>}
      <p>This is your page</p>
      <button type='submit' onClick={(e) => dispatch(logout())}>
        Log out
      </button>
      <h2>Your saved items: </h2>
      <ProductsContainer>

        {favoriteProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductsContainer>
    </div>
  );
};
