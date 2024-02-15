import React from "react";
import "../components/ProductCart.css";
const ProductCart = () => {
  return (
    <div className="productcart">
      <div className="productcartimg">
        <img
          src="https://5.imimg.com/data5/JZ/FY/ZF/SELLER-5825651/organic-dragon-fruit.jpg"
          alt="IMG"
        />
      </div>
      <div className="productcartheading">
        <p>Organic Dragon Fruit</p>
      </div>
      <div className="productcartparagrap">
        <p>
        
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quo totam aliquam ab nesciunt quam explicabo.
        </p>
      
      </div>
      <div className="productcartbutton">
        <button>View Details</button>
      </div>
    </div>
  );
};

export default ProductCart;
