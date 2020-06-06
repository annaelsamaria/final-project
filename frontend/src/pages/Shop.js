import React from 'react'
import { useSelector } from 'react-redux'
import { Product } from '../components/Product'
import styled from 'styled-components/macro';

const ProductsContainer = styled.section`
  display: flex;
  flex-flow: wrap;
`

export const Shop = () => {
  // TODO - fetch all products from the store
  const allProducts = useSelector((store) => store.products)

  return (
    <ProductsContainer>
      {allProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </ProductsContainer>
  )
}
