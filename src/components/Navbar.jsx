import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

function Navbar({ login, setLogin }) {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <NavLink
          className="navbar-brand "
          style={{ textDecoration: "none", color: "black" }}
          to="/"
        >
          Home
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse flex-grow-0 "
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center">
            <li className="nav-item pe-4">
              <NavLink
                className="nav-link"
                to="/"
                style={{ textDecoration: "none", color: "black" }}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item pe-4">
              <NavLink
                className="nav-link"
                to="/about"
                style={{ textDecoration: "none", color: "black" }}
              >
                About
              </NavLink>
            </li>

            <li className="nav-item pe-4">
              <NavLink
                className="nav-link"
                to="/dashboard"
                style={{ textDecoration: "none", color: "black" }}
              >
                Dashboard
              </NavLink>
            </li>
            {login && (
              <li
                className="nav-item text-center p-1"
                style={{ borderRadius: "10px", background: "orangered" }}
              >
                <NavLink
                  className="nav-link m"
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                  onClick={() => setLogin(false)}
                >
                  Log Out
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
