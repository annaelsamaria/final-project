import React, { useEffect, useState } from 'react'
import { ProductCard } from '../components/ProductCard'
import styled from 'styled-components/macro';
import { Nav } from '../components/Nav'
import getPageByContentType from "../helpers/getPagesByContentType";



const ShopPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const InfoSection = styled.div`
  margin: 40px;
  text-align: center;
`
const FilterItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
`
const ProductsContainer = styled.section`
  width: 80%;
  display: flex;
  align-items: center;
  flex-flow: wrap;
`

export const Shop = () => {
  let [products, setProducts] = useState(Object);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    getPageByContentType("product").then(data => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <div>Laddar...</div>

  console.log(products)

  //add filtered categories-function

  return (
    <>
      <Nav />
      <ShopPage>
        <InfoSection>
          <h2>shop</h2>
          <p>HK 240 ceramics are designed in Kungsbacka, Sweden. All items are handmade and unique.</p>
          <FilterItems>
            <button>See all</button>
            <button>Vases</button>
            <button>Plates</button>
            <button>Candle holders</button>
            <button>Egg cups</button>
          </FilterItems>
        </InfoSection>
        <ProductsContainer>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductsContainer>
      </ShopPage>
    </>
  )
}