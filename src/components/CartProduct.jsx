import React from 'react'
import ProductCart from './ProductCart'
import "./CartProduct.css";
const CartProduct = () => {
  return (
    <div className='cartProductdiv'>
    <div className='cartProduct'>
      <ProductCart/>
      <ProductCart/>
      <ProductCart/>
      <ProductCart/>
      <ProductCart/>
      <ProductCart/>
    </div>
    </div>
  )
}

export default CartProduct