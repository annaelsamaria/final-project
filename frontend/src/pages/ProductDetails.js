import React, { useEffect, useState } from 'react';
import { Route, Link, useParams, useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';
import { cart } from '../reducers/cart'
import { useDispatch } from 'react-redux';
import { HeartIcon } from '../lib/HeartIcon'


const ProductContainer = styled.article`
  width: 500px;
  margin: 20px;
`
const ProductImg = styled.img`
  width: 100%;
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
      <Route path="/shop">
        <Link to="/shop">
          <h3>See all products</h3>
        </Link>
      </Route>
      <ProductContainer>
        {item.map((product) =>
          <div key={product.id}>
            <ProductImg src={product.main_img} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.price}:-</p>
            <p>description</p>
            <button
              type="button"
              onClick={() => dispatch(cart.actions.addItem(product))}>ad to cart
             </button>
            <HeartIcon />
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