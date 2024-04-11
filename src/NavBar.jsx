import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className="px-3 py-4 custum-nav-main">
        <nav className="d-flex justify-content-end gap-5 ">
          <NavLink className="nav-link" to="/">Home</NavLink>
          <NavLink className="nav-link" to="/about">About</NavLink>
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
          <NavLink className="nav-link" to="/profile">Profile</NavLink>
          <NavLink className="nav-link" to="/login">Login</NavLink>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
