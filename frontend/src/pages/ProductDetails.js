import React, { useEffect, useState } from 'react';
import { Route, Link, useParams } from 'react-router-dom';
import styled from 'styled-components/macro';
import { cart } from '../reducers/cart'
import { useDispatch } from 'react-redux';
import { HeartIcon } from '../lib/HeartIcon'
import { Nav } from '../components/Nav'
import getProductById from "../helpers/getProductById";
import { SecondTitle } from '../lib/Text'


const ProductContainer = styled.article`
  width: 80%;
  margin: 20px;
  display: flex;
  flex-direction: column;
  margin: 40px auto;

  @media (min-width: 667px) {
    flex-direction: row; 
  }
`
const ProductImg = styled.img`
  width: 300px;
  margin: 0 20px;

  @media (min-width: 667px) {
    width: 500px;
  }
`

const AddToCart = styled.button`
  font-family: 'Roboto', sans-serif;
  margin: 20px;
  border: 1px solid black;
  height: 30px;
  font-size: 16px;
  background: transparent;
  padding: 0 30px;
  transition: opacity .25s ease-in-out;
  -moz-transition: opacity .25s ease-in-out;
  -webkit-transition: opacity .25s ease-in-out;

  &:hover {
    opacity: 0.5;
  }
`

const ProductInfo = styled.div`
  margin-top: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const SecondaryImg = styled.img`
  width: 300px;
  margin: 0 5px;
`

const SecondaryImgContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 667px) {
    flex-direction: row; 
    justify-content: space-between;
  }
`

const ToShop = styled(Link)`
  align-items: center;
  font-size: 16px;
  text-decoration: none;
  color: black;
  transition: opacity .25s ease-in-out;
  -moz-transition: opacity .25s ease-in-out;
  -webkit-transition: opacity .25s ease-in-out;

  &:hover {
    opacity: 0.5;
  }
`

export const ProductDetails = () => {
  const { productId } = useParams()
  const dispatch = useDispatch()

  let [product, setProduct] = useState(Object);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductById(productId).then(page => {
      console.log("page", page)
      setProduct(page);
      setLoading(false);
    });
  }, [productId]);

  if (loading) return <div>Laddar...</div>

  return (
    <>
      <Nav />
      <ProductContainer>
        <ProductImg src={product.fields.mainImage.fields.file.url}
          alt={product.fields.mainImage.fields.title} />

        <ProductInfo>
          <div>
            <SecondTitle>{product.fields.name}</SecondTitle>
            <p>{product.fields.price}:-</p>
          </div>
          <HeartIcon product={product} />
          <p>{product.fields.description}</p>
          <p>{product ? "" : "You can only add the same product once"}</p>
          <div>
            <AddToCart
              type="button"
              onClick={() => dispatch(cart.actions.addItem(product))}>ad to cart
          </AddToCart>
          </div>
          <SecondaryImgContainer>
            <SecondaryImg src={product.fields.secondImage.fields.file.url}
              alt={product.fields.secondImage.fields.title} />
            <SecondaryImg src={product.fields.thirdImage.fields.file.url}
              alt={product.fields.thirdImage.fields.title} />
          </SecondaryImgContainer>
        </ProductInfo>

      </ProductContainer>
      <Route path="/shop">
        <ToShop to="/shop">
          <p>All products</p>
        </ToShop>
      </Route>
    </>
  )
}