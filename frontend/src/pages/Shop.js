import React, { useEffect, useState } from 'react'
import { ProductCard } from '../components/ProductCard'
import styled from 'styled-components/macro';
import { Nav } from '../components/Nav'
import getPageByContentType from "../helpers/getPagesByContentType";
import { SecondTitle } from '../lib/Text'



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
  let [filteredProducts, setFilteredProducts] = useState([]);
  let [loading, setLoading] = useState(true);

  const filterButtons = [
    { name: "See all", value: "See all" },
    { name: "Vase", value: "Vase" },
    { name: "Plate", value: "Plate" },
    { name: "Candle holder", value: "Candle holder" },
    { name: "Egg cup", value: "Egg cup" }
  ]

  // const filterItems = (arr, query) => {
  //   return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)
  // }

  // send in values for the filter onClick


  useEffect(() => {
    getPageByContentType("product").then(data => {
      setProducts(data);
      setFilteredProducts(products);
      setLoading(false);
    });
  }, []);

  if (loading) return <div>Laddar...</div>



  //add filtered categories-function
  // Get the categories from products.. 
  // Do I need to do the map in a function to get the objects matching the value?
  // if name === all return products else
  // filter(products) === products.fields.category === {value} 
  // push filtered objects in new array??

  const filterOnClick = (name) => {
    console.log("filter")
    if (name === "See all") {
      setFilteredProducts(products)
      console.log("all", filteredProducts)
    } else {
      console.log("före", products)
      setFilteredProducts(products.filter(product => product.fields.category === name))
      console.log("filter", filteredProducts)
      console.log("products", products)

    }
  }

  return (
    <>
      <Nav />
      <ShopPage>
        <InfoSection>
          <SecondTitle>SHOP</SecondTitle>
          <p>HK 240 ceramics are designed in Kungsbacka, Sweden. All items are handmade and unique.</p>
          <FilterItems>
            {filterButtons.map(({ name, value }) => (
              <button
                key={name}
                value={value}
                onClick={(event) => filterOnClick(event.target.value)}>
                {name}
              </button>
            ))}
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
