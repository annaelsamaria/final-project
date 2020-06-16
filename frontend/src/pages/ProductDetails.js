import React, { useEffect, useState } from 'react';
import { Route, Link, useParams } from 'react-router-dom';
import styled from 'styled-components/macro';
import { cart } from '../reducers/cart'
import { useDispatch } from 'react-redux';
import { HeartIcon } from '../lib/HeartIcon'
import { Nav } from '../components/Nav'
import getProductById from "../helpers/getProductById";


const ProductContainer = styled.article`
  width: 1200px;
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
    width: 600px;
  }
`


const AddToCart = styled.button`
  margin: 20px;
  border: 1px solid black;
  height: 30px;
  font-size: 16px;
  background: transparent;
  padding: 0 20px;
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
  margin: 0 20px;
`

const SecondaryImgContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 667px) {
    flex-direction: row; 
    justify-content: space-between;
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
    <div>
      <Nav />
      <ProductContainer>
        <ProductImg src={product.fields.mainImage.fields.file.url}
          alt={product.fields.mainImage.fields.title} />

        <ProductInfo>
          <div>
            <h2>{product.fields.name}</h2>
            <p>{product.fields.price}:-</p>
            <AddToCart
              type="button"
              onClick={() => dispatch(cart.actions.addItem(product))}>ad to cart
             </AddToCart>
            <HeartIcon product={product} />
          </div>

          <p>{product.fields.description}</p>
          <p>{product ? "" : "You can only add the same product once"}</p>

          <SecondaryImgContainer>
            <SecondaryImg src={product.fields.secondImage.fields.file.url}
              alt={product.fields.secondImage.fields.title} />
            <SecondaryImg src={product.fields.thirdImage.fields.file.url}
              alt={product.fields.thirdImage.fields.title} />
          </SecondaryImgContainer>
        </ProductInfo>

      </ProductContainer>
      <Route path="/shop">
        <Link to="/shop">
          <p>All products</p>
        </Link>
      </Route>
    </div>
  )
}