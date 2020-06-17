import React, { useState } from 'react';
import styled from 'styled-components';
import { Cart } from '../pages/Cart'
import { useSelector } from 'react-redux'


const Bag = styled.button`
  font-family: 'Roboto', sans-serif;
  position: absolute;
  top: 20px;
  right: 30px;
  z-index: 1;
  background: none;
  font-size: 16px;
  border: none;
  margin-left: 10px;
  padding: 0;

&:hover {
  cursor: pointer;
  opacity: 0.5;
}
`;


export const ToggleCart = () => {
  const [open, setOpen] = useState(false)
  const totalItems = useSelector((store) => (
    store.cart.items.reduce((total, item) => (total + (item.quantity)), 0)
  ))

  return (
    <>
      <Bag open={open} onClick={() => setOpen(!open)}>
        {open === true ? "X" : `Cart(${totalItems})`}
      </Bag>
      <Cart open={open} />
    </>
  )
}