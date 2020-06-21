import React from 'react'
import styled from 'styled-components/macro';
import { CartItem } from '../components/CartItem'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { ui } from '../reducers/ui'
import { Button } from '../lib/Button'
import { Subtitle } from '../lib/Text'


const RightCart = styled.div`
  background-color: #f9f3ea;
  position: fixed;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  overflow-y: scroll;
  padding-top: 20px;
  transition: transform 0.3s ease-in-out;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media (min-width: 667px) {
    width: 400px;
  }
`;

const CartContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`

const CloseButton = styled(Button)`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  padding: 0;
`

const CartProducts = styled.ul`
  padding: 0;
`

const Line = styled.div`
  border-bottom: 1px solid black;
  width: 200px;
  margin: 10px;
`

const ToShop = styled(Link)`
  display: flex;
  align-items: center;
  border: 1px solid black;
  height: 30px;
  font-size: 16px;
  background: transparent;
  padding: 0 20px;
  text-decoration: none;
  color: black;
  margin: 20px;
  transition: all .2s ease-in-out; 
  // transition: opacity .25s ease-in-out;
  // -moz-transition: opacity .25s ease-in-out;
  // -webkit-transition: opacity .25s ease-in-out;

  &:hover {
    transform: scale(1.1); 

    // opacity: 0.5;
  }
`

export const Cart = () => {
  const dispatch = useDispatch()
  const products = useSelector((store) => store.cart.items)
  const open = useSelector((store) => store.ui.openCart)
  const totalPrice = useSelector((store) => (
    store.cart.items.reduce((total, item) => (total + (item.fields.price * item.quantity)), 0)
  ))
  const totalItems = useSelector((store) => (
    store.cart.items.reduce((total, item) => (total + (item.quantity)), 0)))

  return (
    <RightCart open={open}>
      <CartContent>
        <CloseButton onClick={() => dispatch(ui.actions.closeCart())}>X</CloseButton>
        <Subtitle>My bag ({totalItems})</Subtitle>
        <Line />
        <CartProducts>
          {products.map((product) => (
            <CartItem key={product.sys.id} product={product} />
          ))}
        </CartProducts>
        <Line />
        <div>
          <Subtitle>Total: {totalPrice}:-</Subtitle>
          <ToShop to="/checkout" onClick={() => dispatch(ui.actions.closeCart())}>Checkout</ToShop>
        </div>
      </CartContent>
    </RightCart>
  )
}

