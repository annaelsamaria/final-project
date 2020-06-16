import React, { useEffect, useState } from 'react';
import { Route, Link, useParams, useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';
import { cart } from '../reducers/cart'
import { useDispatch } from 'react-redux';
import { HeartIcon } from '../lib/HeartIcon'
import { Nav } from '../components/Nav'
import getProductById from "../helpers/getProductById";



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
  //   const [item, setItem] = useState([])
  // const history = useHistory();
  // const [statusCode, setStatusCode] = useState(200);
  // const DETAILS_API = `http://localhost:8080/shop/product/${productId}`
  const dispatch = useDispatch()

  let [products, setProducts] = useState(Object);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductById(productId).then(page => {
      console.log("page", page)
      setProducts(page);
      setLoading(false);
    });
  }, []);

  if (loading) return <div>Laddar...</div>


  // useEffect(() => {
  //   fetch(DETAILS_API)
  //     .then(res => {
  //       setStatusCode(res.status)
  //       return res.json()
  //     })
  //     .then(json => setItem(json))
  // }, [DETAILS_API, productId])

  // useEffect(() => {
  //   console.log(`Status code: ${statusCode}`);
  //   if (statusCode !== 200) {
  //     history.push("/");
  //   }
  // }, [history, statusCode]);

  // if (!item) {
  //   return <></>;
  // }

  return (
    <div>
      <Nav />
      <Route path="/shop">
        <Link to="/shop">
          <h3>See all products</h3>
        </Link>
      </Route>
      <ProductContainer>
        {products.map((product) =>
          <div key={product.fields.name}>
            <ProductImg src={product.fields.mainImage.fields.file.url}
              alt={product.fields.mainImage.fields.title} />
            <div>
              <h2>{product.fields.name}</h2>
              <p>{product.fields.price}:-</p>
              <p>{product.fields.description}</p>
              <AddToCart
                type="button"
                onClick={() => dispatch(cart.actions.addItem(product))}>ad to cart
             </AddToCart>
              <p>{product ? "" : "You can only add the same product once"}</p>
              <HeartIcon product={product} />
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