import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components/macro';

const ProductCard = styled.article`
  width: 250px;
  margin: 20px;
`
// const ProductImg = styled.img`
//   width: 100%;
// `

export const ProductDetails = () => {
  return (
    <ProductCard>
      <div>
        <p>info</p>
        <button>add to cart</button>
      </div>
    </ProductCard>
  )
}



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
