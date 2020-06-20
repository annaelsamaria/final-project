import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro';
import { HeartIcon } from '../lib/HeartIcon'


const Product = styled.article`
  width: 300px;
  margin: 20px;
`

const ProductImg = styled.img`
  width: 100%;
  transition: all .25s ease-in-out; 
  -moz-transition: all .25s ease-in-out;
  -webkit-transition: all .25s ease-in-out;

  &:hover {
    transform: scale(1.05); 
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
        <HeartIcon product={product} />
      </ProductInfo>
    </Product>
  )
}