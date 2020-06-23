import React, { useEffect, useState } from 'react'
import { ProductCard } from '../components/ProductCard'
import styled from 'styled-components/macro';
import { Nav } from '../components/Nav'
import getPageByContentType from "../helpers/getPagesByContentType";
import { SecondTitle } from '../lib/Text'
import { Spinner } from '../lib/LoadingSpinner'
import { ScrollTopButton } from '../lib/Button'



const ShopPage = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const InfoSection = styled.div`
  margin-top: 40px;
  text-align: center;
  padding: 20px;
`
const FilterItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  flex-flow: wrap;
`

const FilterButtons = styled.button`
  font-family: 'Roboto', sans-serif;
  margin: 5px;
  border: none;
  outline: none;
  height: 30px;
  font-size: 16px;
  background: #8CA4B3;
  padding: 0 30px;
  transition: all .25s ease-in-out; 

  &:hover {
    background: #ecd6ba;
  }
  `

const ProductsContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  flex-flow: wrap;
`

export const Shop = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const filterButtons = [
    { name: "See all", value: "See all" },
    { name: "Vases", value: "Vase" },
    { name: "Plates", value: "Plate" },
    { name: "Candle holders", value: "Candle holder" },
    { name: "Egg cups", value: "Egg cup" }
  ]

  useEffect(() => {
    getPageByContentType("product").then(data => {
      setProducts(data);
      setFilteredProducts(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <Spinner />

  const filterOnClick = (value) => {
    if (value === "See all") {
      setFilteredProducts(products)
    } else {
      setFilteredProducts(products.filter(product => product.fields.category === value))
    }
  }

  return (
    <>
      <Nav />
      <ShopPage>
        <InfoSection>
          <SecondTitle>Shop</SecondTitle>
          <p>Inspired by the swedish west coast, waves, sand and nature.</p>
          <p>All items are handmade and unique.</p>
          <FilterItems>
            {filterButtons.map(({ name, value }) => (
              <FilterButtons key={name} onClick={() => filterOnClick(value)}>
                {name}
              </FilterButtons>
            ))}
          </FilterItems>
        </InfoSection>
        <ProductsContainer>
          {filteredProducts.map((product) => (
            <ProductCard key={product.sys.id} product={product} />
          ))}
        </ProductsContainer>
        <ScrollTopButton />
      </ShopPage>
    </>
  )
}