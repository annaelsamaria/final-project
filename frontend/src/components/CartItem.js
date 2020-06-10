import React from 'react'
import { cart } from '../reducers/cart'
import { useDispatch } from 'react-redux';

export const CartItem = ({ product }) => {
  const dispatch = useDispatch()
  return (
    <div>
      <div>
        <p>{product.title}</p>
        <p>x{product.quantity}</p>
        <p> = {product.price * product.quantity}:-</p>
      </div>

      <span className="actions">
        <button type="button" onClick={() => dispatch(cart.actions.removeItem(product))}>-</button>
      </span>
    </div>
  )
}
