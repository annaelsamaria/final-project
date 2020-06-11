import React, { useEffect, useState } from 'react'
import { ProductCard } from '../components/ProductCard'
import styled from 'styled-components/macro';
import { Nav } from '../components/Nav'


const ShopPage = styled.div`
`
const InfoSection = styled.div`
  text-align: center;
`
const FilterItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
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


  //add filtered categories-function

  return (
    <ShopPage>
      <Nav />
      <InfoSection>
        <h2>shop</h2>
        <p>HK 240 ceramics are designed in Kungsbacka, Sweden. All items are handmade and unique.</p>
        <FilterItems>
          <p>See all</p>
          <p>Vases</p>
          <p>Candle holders</p>
          <p>Egg cups</p>
        </FilterItems>
      </InfoSection>
      <ProductsContainer>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductsContainer>
    </ShopPage>
  )
}
