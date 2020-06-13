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
  height: 100vh;
  width: 300px;
  padding-top: 3.5rem;
  transition: transform 0.3s ease-in-out;
`;


export const Cart = ({ open }) => {
  const products = useSelector((store) => store.cart.items)
  const totalPrice = useSelector((store) => (
    store.cart.items.reduce((total, item) => (total + (item.price * item.quantity)), 0)
  ))

  return (
    <RightCart open={open}>
      <h3>My bag</h3>
      <ul>
        {products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </ul>
      <div>
        <div>Total: {totalPrice}:-</div>
        <button>Go to checkout</button>
      </div>
    </RightCart>
  )
}

