import React, { useEffect, useState } from 'react';
import { Route, Link, useParams, useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';
import { cart } from '../reducers/cart'
import { useDispatch } from 'react-redux';
import { HeartIcon } from '../lib/HeartIcon'
import { Nav } from '../components/Nav'


const ProductContainer = styled.article`
  width: 500px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`
const ProductImg = styled.img`
  width: 100%;
`
const AddToCart = styled.button`
  border: 1px solid black;
  height: 30px;
  font-size: 16px;
  background: transparent;
  padding: 0 20px;
`

export const ProductDetails = () => {
  const { productId } = useParams()
  const [item, setItem] = useState([])
  const history = useHistory();
  const [statusCode, setStatusCode] = useState(200);
  const DETAILS_API = `http://localhost:8080/products/${productId}`
  const dispatch = useDispatch()


  useEffect(() => {
    fetch(DETAILS_API)
      .then(res => {
        setStatusCode(res.status)
        return res.json()
      })
      .then(json => setItem(json))
  }, [DETAILS_API, productId])

  useEffect(() => {
    console.log(`Status code: ${statusCode}`);
    if (statusCode !== 200) {
      history.push("/");
    }
  }, [history, statusCode]);

  if (!item) {
    return <></>;
  }

  return (
    <div>
      <Nav />
      <Route path="/shop">
        <Link to="/shop">
          <h3>See all products</h3>
        </Link>
      </Route>
      <ProductContainer>
        {item.map((product) =>
          <div key={product.id}>
            <ProductImg src={product.main_img} alt={product.title} />
            <div>
              <h2>{product.title}</h2>
              <p>{product.price}:-</p>
              <p>description</p>
              <AddToCart
                type="button"
                onClick={() => dispatch(cart.actions.addItem(product))}>ad to cart
             </AddToCart>
              <p>{product ? "" : "You can only add the same product once"}</p>
              <HeartIcon />
            </div>
            <div>
              <ProductImg src={product.second_img} alt={product.title} />
              <ProductImg src={product.third_img} alt={product.title} />
            </div>
          </div>
        )}
      </ProductContainer>
    </div>
  )
}