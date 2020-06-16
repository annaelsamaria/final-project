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
      <ProductImg src={product.fields.mainImage.fields.file.url}
        alt={product.fields.mainImage.fields.title} />
      <ProductInfo>
        <p>{product.fields.name} </p>
        <p>{product.fields.price}:-</p>
      </ProductInfo>
      <span>
        <button type="button" onClick={() => dispatch(cart.actions.removeItem(product))}>-</button>
      </span>
    </CartProduct>
  )
}
