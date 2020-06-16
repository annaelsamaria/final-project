import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro';
import { HeartIcon } from '../lib/HeartIcon'


const Product = styled.article`
  width: 300px;
  margin: 20px;

  @media (min-width: 667px) {
    width: 400px;
  }

`
const ProductImg = styled.img`
  width: 100%;

  transition: opacity .25s ease-in-out;
  -moz-transition: opacity .25s ease-in-out;
  -webkit-transition: opacity .25s ease-in-out;

  &:hover {
    opacity: 0.5;
  }
`

const ProductInfo = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`

export const ProductCard = ({ product }) => {
  return (
    <Product>
      <Link to={`/shop/product/${product.sys.id}`} key={product.fields.title}>
        <ProductImg
          src={product.fields.mainImage.fields.file.url}
          alt={product.fields.mainImage.fields.title}
        />
      </Link>
      <ProductInfo>
        <div>
          <p>{product.fields.name}</p>
          <p>{product.fields.price}:-</p>
        </div>
        <HeartIcon />
      </ProductInfo>
    </Product>
  )
}