import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro';
import { HeartIcon } from '../lib/HeartIcon'


const Product = styled.article`
  width: 250px;
  margin: 20px;

`
const ProductImg = styled.img`
  width: 100%;

  &:hover {
    opacity: 0.5;
  }
`

export const ProductCard = ({ product }) => {
  return (
    <Product>
      <Link to={`/shop/product/${product.id}`} key={product.title}>
        <ProductImg src={product.main_img} aria-label={product.title}></ProductImg>
      </Link>
      <div>
        <p>{product.title}</p>
        <p>{product.price}:-</p>
      </div>
      <HeartIcon />
    </Product>
  )
}