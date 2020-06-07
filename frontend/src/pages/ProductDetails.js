import React, { useEffect, useState } from 'react';
import { Route, Link, useParams, useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';

// const ProductCard = styled.article`
//   width: 250px;
//   margin: 20px;
// `
// const ProductImg = styled.img`
//   width: 100%;
// `


export const ProductDetails = () => {
  const { productId } = useParams()
  const [item, setItem] = useState([])
  const history = useHistory();
  const [statusCode, setStatusCode] = useState(200);
  const DETAILS_API = `http://localhost:8080/products/${productId}`


  useEffect(() => {
    fetch(DETAILS_API)
      .then(res => {
        setStatusCode(res.status)
        return res.json()
      })
      .then(json => setItem(json))
  }, [DETAILS_API, productId])
  console.log("item", item)

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
          <h3>back</h3>
        </Link>
      </Route>
      <div>
        <img src={item.main_img} alt={item.title} />
        <h1>{item.title}</h1>
        <p>{item.price}</p>
      </div>
    </div>
  )
}



// export const ProductDetails = () => {
//   const { productsId } = useParams()
//   const [product, setProduct] = useState([])
//   // const DETAILS_API = `http://localhost:8080/products/${productsId}`
//   const DETAILS_API = `http://localhost:8080/shop/products/`


//   useEffect(() => {
//     fetch(DETAILS_API)
//       .then(res => res.json())
//       .then((json) => {
//         setProduct(json)
//       })
//   }, [DETAILS_API, productsId])

//   console.log(product)
//   if (!product) {
//     return <></>;
//   }

//   const singleProduct = product.find((product) => product.id === productsId.id)
//   console.log("hello", singleProduct)

//   return (
//     <ProductCard>
//       <div>
//         <p>info</p>
//         <p>{singleProduct.title}</p>
//         <ProductImg src={product.main_img} aria-label={product.title}></ProductImg>
//         <button>add to cart</button>
//       </div>
//     </ProductCard>
//   )
// }


// export const ProductDetails = ({ product }) => {
//   return (
//     <ProductCard>
//       <ProductImg src={product.main_img} aria-label={product.title}></ProductImg>
//       <div>
//         <p>{product.title}</p>
//         <p>{product.price}:-</p>

//         <button
//           type="button"
//           onClick={() => { }}>ad to cart
//         </button>
//         <ProductImg src={product.second_img} aria-label={product.title}></ProductImg>
//         <ProductImg src={product.third_img} aria-label={product.title}></ProductImg>
//       </div>
//     </ProductCard>
//   )
// }
