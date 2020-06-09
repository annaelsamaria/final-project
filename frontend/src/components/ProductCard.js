import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro';

const Product = styled.article`
  width: 250px;
  margin: 20px;
`
const ProductImg = styled.img`
  width: 100%;
`

//byt namn på denna till productCard
export const ProductCard = ({ product }) => {
  return (
    <Product>
      <Link to={`/shop/product/${product.id}`} key={product.title}>
        <ProductImg src={product.main_img} aria-label={product.title}></ProductImg>
        <div>
          <p>{product.title}</p>
          <p>{product.price}:-</p>
        </div>
      </Link>
    </Product>
  )
}