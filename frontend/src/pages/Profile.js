import React from 'react';
import { logout } from '../reducers/user';
import { useDispatch, useSelector } from 'react-redux';
import { ProductCard } from '../components/ProductCard'


export const Profile = () => {
  const dispatch = useDispatch();
  const errorMessage = useSelector((store) => store.user.login.errorMessage);
  const loginMessage = useSelector((store) => store.user.login.loginMessage);
  const favoriteProducts = useSelector((store) => store.cart.favoriteItems)
  console.log("hearts", favoriteProducts)

  return (
    <div>
      {errorMessage && <h4>Error Message : {`${errorMessage}`}</h4>}
      {loginMessage && <h4>Secret Message : {`${loginMessage}`}</h4>}
      <p>Lots of secret stuff here</p>
      <button type='submit' onClick={(e) => dispatch(logout())}>
        LOG OUT
      </button>
      <h2>Your saved items: </h2>
      {favoriteProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
