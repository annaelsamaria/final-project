import React from 'react'
import { cart } from '../reducers/cart'
import { useDispatch } from 'react-redux';
import styled from 'styled-components/macro';


const ProductImg = styled.img`
  width: 100%;

  &:hover {
    opacity: 0.5;
  }
`

export const CartItem = ({ product }) => {
  const dispatch = useDispatch()
  return (
    <div>
      <div>
        <ProductImg src={product.main_img} aria-label={product.title}></ProductImg>
        <p>{product.title}</p>
        <p>x{product.quantity}</p>
        <p> = {product.price * product.quantity}:-</p>
      </div>

      <span className="actions">
        <button type="button" onClick={() => dispatch(cart.actions.removeItem(product))}>-</button>
      </span>
    </div>
  )
}
