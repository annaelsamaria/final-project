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
          <div key={product.name}>
            <ProductImg src={product.main_img} alt={product.name} />
            <div>
              <h2>{product.title}</h2>
              <p>{product.price}:-</p>
              <p>description</p>
              <AddToCart
                type="button"
                onClick={() => dispatch(cart.actions.addItem(product))}>ad to cart
             </AddToCart>
              <p>{product ? "" : "You can only add the same product once"}</p>
              <button
                type="button"
                onClick={() => dispatch(cart.actions.saveFavorite(product))}>
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181" /></svg>
              </button>
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