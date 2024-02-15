import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {

const [classrow,setclassrow]=useState(true)

const handleclick=()=>{
  setclassrow(!classrow)
}
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">GREEN</a>
        </div>

        <div className={`navbar-menu`}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#login">Login</a>
          <a href="#Contact">Contact</a>
        </div>

        <div className="navbar-toggle" onClick={handleclick} >
          
          <h2>☰</h2>
          <div className={classrow?"navabr-notvisible":"navabr-visible"}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#login">Login</a>
          <a href="#Contact">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
