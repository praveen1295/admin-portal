import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <NavLink
          class="navbar-brand "
          style={{ textDecoration: "none" }}
          to="/"
        >
          Home
        </NavLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse flex-grow-0 "
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li class="nav-item pe-4">
              <NavLink class="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li class="nav-item pe-4">
              <NavLink class="nav-link" to="/about">
                About
              </NavLink>
            </li>

            <li class="nav-item">
              <NavLink class="nav-link" to="/dashboard">
                Dashboard
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
