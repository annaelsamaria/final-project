import React, { useState } from 'react'
import styled from 'styled-components/macro';
import { CartItem } from '../components/CartItem'
import { useSelector } from 'react-redux'


const RightCart = styled.div`
  background-color: #FFF8EE;
  position: fixed;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  // height: ${document.height}
  overflow-y: scroll;
  padding-top: 3.5rem;
  transition: transform 0.3s ease-in-out;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media (min-width: 667px) {
    width: 400px;
  }
`;

const CartContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
`
const CartProducts = styled.ul`
  padding: 0;

`

const Checkout = styled.button`
  font-family: 'Roboto', sans-serif;
  border: 1px solid black;
  height: 30px;
  font-size: 16px;
  background: transparent;
  padding: 0 20px;
  transition: opacity .25s ease-in-out;
  -moz-transition: opacity .25s ease-in-out;
  -webkit-transition: opacity .25s ease-in-out;

  &:hover {
    opacity: 0.5;
  }
`


export const Cart = ({ open }) => {
  const products = useSelector((store) => store.cart.items)
  const totalPrice = useSelector((store) => (
    store.cart.items.reduce((total, item) => (total + (item.fields.price * item.quantity)), 0)
  ))

  return (
    <RightCart open={open}>
      <CartContent>
        <h3>My bag</h3>
        <CartProducts>
          {products.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
        </CartProducts>
        <div>
          <div>Total: {totalPrice}:-</div>
          <Checkout>Go to checkout</Checkout>
        </div>
      </CartContent>
    </RightCart>
  )
}

