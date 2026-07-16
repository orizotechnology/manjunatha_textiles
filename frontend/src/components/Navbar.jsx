import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../SMT_logo.svg";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <nav className="navbar">


      <div className="nav-logo">
        <h2>
          <img src={logo} alt="Manjunath Textiles"  />
          SRI MANJUNATHA TEXTILES
        </h2>
      </div>



      <div className={menuOpen ? "nav-links active" : "nav-links"}>

        <Link to="/">Home</Link>

        <Link to="/collections">
          Collections
        </Link>

        <Link to="/products">
          Products
        </Link>

        <Link to="/gallery">
          Gallery
        </Link>

        <Link to="/about">
          About
        </Link>

        <Link to="/contact">
          Contact
        </Link>


      </div>



      <div className="nav-icons">

        <span>
          🔍
        </span>


        <Link to="/cart">
          🛒
        </Link>


      </div>



      <div 
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >

        ☰

      </div>


    </nav>
  );
};


export default Navbar;
