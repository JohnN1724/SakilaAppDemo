import React from "react";
import { Link } from "react-router-dom";
import './css/navbar.css'
import logo from './img/logo.jpg'

function Navbar() {
  return (
    <nav>
      <ul>
        <a href="https://www.amazon.co.uk/Amazon-Video/b?ie=UTF8&node=3010085031">
        <img src={logo}></img>
        </a>
        <li>
          <h1><Link to="/">Home</Link></h1>
        </li>
        <li>
        <h1><Link to="/Actor">Actors</Link></h1>
        </li>
        <li>
        <h1><Link to="/Film">Films</Link></h1>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;