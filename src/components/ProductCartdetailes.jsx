import React from "react";
import "./ProductCartdetailes.css";
import { BiLeaf } from "react-icons/bi";
const ProductCartDetails = () => {
  return (
    <div className="ProductCartdetailes">
      <div className="ProductCartdetailesimg">
        <BiLeaf />
      </div>
      <div className="ProductCartdetailesheading">
        <p>Organic Dragon Fruit</p>
      </div>
      <div className="ProductCartdetailesparagrap">
        <p>
         
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quo totam aliquam ab nesciunt quam explicabo.
        </p>
      </div>
      <div className="ProductCartdetailesparagrap">
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quo totam aliquam ab nesciunt quam explicabo.
        </p>
      </div>
    </div>
  );
};

export default ProductCartDetails;
