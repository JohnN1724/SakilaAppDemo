import React from "react";
import { Link } from "react-router-dom";
import './css/navbar.css'

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Actor">Actors</Link>
        </li>
        <li>
          <Link to="/Film">Films</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;