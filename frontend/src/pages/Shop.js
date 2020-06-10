import React, { useEffect, useState } from 'react'
import { ProductCard } from '../components/ProductCard'
import styled from 'styled-components/macro';

const ProductsContainer = styled.section`
  width: 80%;
  display: flex;
  flex-flow: wrap;
  margin: 0 auto;
`

export const Shop = () => {
  const PRODUCTS_API = "http://localhost:8080/products"
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch(PRODUCTS_API)
      .then(res => res.json())
      .then((json) => {
        setProducts(json)
      })
  }, [])


  //add filtered categories as "buttons", also a "see all"

  return (
    <ProductsContainer>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductsContainer>
  )
}
