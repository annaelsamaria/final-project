import React from 'react'
import styled from 'styled-components/macro';
import { CartItem } from '../components/CartItem'
import { useSelector, useDispatch } from 'react-redux'
import { ui } from '../reducers/ui'
import { Button } from '../lib/Button'
import { Subtitle } from '../lib/Text'


const RightCart = styled.div`
  background-color: #FFF8EE;
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
            <CartItem key={product.id} product={product} />
          ))}
        </CartProducts>
        <Line />
        <div>
          <Subtitle>Total: {totalPrice}:-</Subtitle>
          <Button>Go to checkout</Button>
        </div>
      </CartContent>
    </RightCart>
  )
}

