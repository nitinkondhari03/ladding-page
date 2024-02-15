import React from 'react'
import "./CartProductdetailes.css";
import ProductCartDetails from './ProductCartdetailes';
const CartProductDetails = () => {
  return (
    <div className='cartProductdiv'>
    <div className='cartProduct'>
      <ProductCartDetails/>
      <ProductCartDetails/>
      <ProductCartDetails/>
      <ProductCartDetails/>
      <ProductCartDetails/>
      <ProductCartDetails/>
    </div>
    </div>
  )
}

export default CartProductDetails