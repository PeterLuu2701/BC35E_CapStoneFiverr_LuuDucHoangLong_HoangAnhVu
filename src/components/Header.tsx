import React from "react";
import { NavLink } from "react-router-dom";

type Props = {};

const Header = (props: Props) => {
  return (
    <nav className="navbar navbar-expand">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img
            src="https://1000logos.net/wp-content/uploads/2021/11/Fiverr-Logo.png"
            alt=""
          />
        </NavLink>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <form className="d-flex me-auto mt-2 mt-lg-0">
            <input
              className="form-control search-input"
              type="text"
              placeholder="Find Services"
            />
            <button className="btn btn-success search-button" type="submit">
              Search
            </button>
          </form>
          <ul className="navbar-nav d-flex my-2 my-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                to=""
                aria-current="page"
              >
                Fiverr Business
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="#">
                Explore
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="#">
                <i className="fa-solid fa-globe"></i> English
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="#">
                US$ USD
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="#">
                Become a Seller
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="login">
                Sign in
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="register">
                <button className="btn btn-outline-success">Join</button>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;