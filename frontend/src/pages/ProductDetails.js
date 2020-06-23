import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import { cart } from '../reducers/cart'
import { useDispatch, useSelector } from 'react-redux';
import { HeartIcon } from '../lib/HeartIcon'
import { Nav } from '../components/Nav'
import getProductById from "../helpers/getProductById";
import { SecondTitle } from '../lib/Text'
import { Button } from '../lib/Button'
import { Spinner } from '../lib/LoadingSpinner'
import { ReturnArrow } from '../lib/Return'
import { ScrollTopButton } from '../lib/Button'


const ProductPage = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ProductContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px auto;

  @media (min-width: 1024px) {
    flex-direction: row; 
    align-items: normal;
  }
`


const ProductImg = styled.img`
  width: 300px;
  margin-right: 20px;
  display: block;

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

const SecondaryImgContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 667px) {
    flex-direction: row; 
    justify-content: space-between;
  }
`

const SecondaryImg = styled.img`
  width: 300px;
  margin: 5px 5px 0 0;
`



export const ProductDetails = () => {
  const { productId } = useParams()
  const dispatch = useDispatch()
  const [product, setProduct] = useState(Object);
  const [loading, setLoading] = useState(true);

  const itemsAdded = useSelector((store) => (store.cart.items))
  const itemAdded = itemsAdded.find((item) => item.sys.id === productId)

  useEffect(() => {
    getProductById(productId).then(page => {
      setProduct(page);
      setLoading(false);
    });
  }, [productId]);

  if (loading) return <Spinner />

  return (
    <>
      <Nav />
      <ProductPage>
        <ProductContainer>
          <div>
            <ReturnArrow />
            <ProductImg src={product.fields.mainImage.fields.file.url}
              alt={product.fields.mainImage.fields.title} />
          </div>
          <ProductInfo>
            <div>
              <SecondTitle>{product.fields.name}</SecondTitle>
              <p>{product.fields.price}:-</p>
            </div>
            <HeartIcon product={product} />
            <p>{product.fields.description}</p>
            <div>
              <p>{itemAdded ? "(Added to cart)" : ""}</p>
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
        <ScrollTopButton />
      </ProductPage>
    </>
  )
}