import React from 'react'
import { cart } from '../reducers/cart'
import { useDispatch } from 'react-redux';
import styled from 'styled-components/macro';


const CartProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`

const ProductImg = styled.img`
  width: 80%;
`

const ProductInfo = styled.div`
  display: flex;
  margin: 10px;
`

export const CartItem = ({ product }) => {
  const dispatch = useDispatch()
  return (
    <CartProduct>
      <ProductImg src={product.main_img} aria-label={product.title}></ProductImg>
      <ProductInfo>
        <p>{product.title} </p>
        <p>{product.price * product.quantity}:-</p>
      </ProductInfo>
      <span>
        <button type="button" onClick={() => dispatch(cart.actions.removeItem(product))}>-</button>
      </span>
    </CartProduct>
  )
}
