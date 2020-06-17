import React from 'react'
import { cart } from '../reducers/cart'
import { useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import { Button } from '../lib/Button'

const CartProduct = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`

const ProductImg = styled.img`
  width: 100px;
`

const ProductWrapper = styled.div`
  padding: 10px;
  display: flex;
  background: white;
`

const RemoveButton = styled(Button)`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  padding: 0;
  margin: 0;
`

const Details = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const CartItem = ({ product }) => {
  const dispatch = useDispatch()
  return (
    <CartProduct>
      <ProductWrapper>
        <ProductImg
          src={product.fields.mainImage.fields.file.url}
          alt={product.fields.mainImage.fields.title}
        />
        <Details>
          <div>
            <p>{product.fields.name}</p>
            <p>{product.fields.price}:-</p>
          </div>
          <RemoveButton type="button" onClick={() => dispatch(cart.actions.removeItem(product))}>–</RemoveButton>
        </Details>
      </ProductWrapper>
    </CartProduct>
  )
}
