import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item nav-link">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="nav-item nav-link">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className=" nav-item nav-link">
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
