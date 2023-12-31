import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/shared/desktop/logo.svg";
import MobileNav from "./MobileNav/MobileNav";

const Navbar = (props) => {
  const [isNavOpen, setNavOpen] = useState(false);

  const navbarToggle = () => {
    setNavOpen(!isNavOpen);
    props.c_func(false);
  };

  return (
    <div className="nav">
      <div className="icons">
        <i className="fas fa-bars" onClick={navbarToggle}></i>
        <NavLink to="/">
          <img src={Logo} alt="" />
        </NavLink>
      </div>

      <div className="middle">
        <NavLink to="/" className="custom">
          <span>Home</span>
        </NavLink>
        <NavLink className="custom" to="/headphones">
          <span>Headphones</span>
        </NavLink>
        <NavLink className="custom" to="/speakers">
          <span>Speakers</span>
        </NavLink>
        <NavLink className="custom" to="/earphones">
          <span>Earphones</span>
        </NavLink>
      </div>

      <MobileNav setting={isNavOpen} setNavOpen={setNavOpen} />
      <div
        className="fas fa-shopping-cart"
        onClick={() => {
          props.c_func(!props.cState);
          setNavOpen(false);
        }}
      >
        {props.totalGoodsCount ? (
          <div className="extra-circle">{props.totalGoodsCount}</div>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
