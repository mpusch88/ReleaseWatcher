import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ authenticated, onLogout }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          ReleaseWatcher
        </Link>
        <div className="d-flex">
          {authenticated && (
            <NavLink
              className="btn btn-primary me-2"
              to="/"
              exact
              activeClassName="active"
            >
              Home
            </NavLink>
          )}
          {authenticated && (
            <button
              className="btn btn-secondary"
              onClick={onLogout}
            >
              Logout
            </button>
          )}
          {!authenticated && (
            <NavLink
              className="btn btn-secondary"
              to="/login"
              activeClassName="active"
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
