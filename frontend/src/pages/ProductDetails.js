import React, { useEffect, useState } from 'react';
import { Route, Link, useParams } from 'react-router-dom';
import styled from 'styled-components/macro';
import { cart } from '../reducers/cart'
import { useDispatch, useSelector } from 'react-redux';
import { HeartIcon } from '../lib/HeartIcon'
import { Nav } from '../components/Nav'
import getProductById from "../helpers/getProductById";
import { SecondTitle } from '../lib/Text'
import { Button } from '../lib/Button'
import { Spinner } from '../lib/LoadingSpinner'


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
  transition: margin-right 0.2s cubic-bezier(0.42, 0, 0.21, 0.99);

  &:hover {
    margin-right: 5px;
  }
`

export const ProductDetails = () => {
  const { productId } = useParams()
  const dispatch = useDispatch()

  const [product, setProduct] = useState(Object);
  const [loading, setLoading] = useState(true);

  //Jag vill veta om en exakt produkt redan ligger i kassan, isf rendera meddelande. 
  const itemsAdded = useSelector((store) => (store.cart.items > 0))


  useEffect(() => {
    getProductById(productId).then(page => {
      console.log("page", page)
      setProduct(page);
      setLoading(false);
    });
  }, [productId]);

  if (loading) return <Spinner />

  return (
    <>
      <Nav />
      <Route path="/shop">
        <ToShop to="/shop">
          <p>All products</p>
        </ToShop>
      </Route>
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
          <p>{itemsAdded ? "" : "You can only add the same product once"}</p>
          <div>
            <Button
              type="button"
              onClick={() => dispatch(cart.actions.addItem(product))}>ad to cart
          </Button>
          </div>
          <SecondaryImgContainer>
            <SecondaryImg src={product.fields.secondImage.fields.file.url}
              alt={product.fields.secondImage.fields.title} />
            <SecondaryImg src={product.fields.thirdImage.fields.file.url}
              alt={product.fields.thirdImage.fields.title} />
          </SecondaryImgContainer>
        </ProductInfo>

      </ProductContainer>
    </>
  )
}