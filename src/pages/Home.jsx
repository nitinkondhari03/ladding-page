import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import CartProduct from "../components/CartProduct";
import CartProductDetails from "../components/CartProductdetailes";
import FreshProduct from "../components/FreshProduct";
const Home = () => {
  return (
    <div>
      <Navbar />

      <Carousel />
      <CartProduct />
      <FreshProduct/>
      <CartProductDetails />
      <Footer />
    </div>
  );
};

export default Home;
