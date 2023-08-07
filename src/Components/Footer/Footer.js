import React from "react";
import "./Footer.css";
import Logo from "../../assets/images/shared/desktop/logo.svg";
import Twitter from "../../assets/images/shared/desktop/icon-twitter.svg";
import Facebook from "../../assets/images/shared/desktop/icon-facebook.svg";
import Ig from "../../assets/images/shared/desktop/icon-instagram.svg";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <section className="footer">
      <div className="f-top">
        <img src={Logo} alt="" />
        <div className="span">
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
      </div>

      <div className="icons">
        <p>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <div className="icon">
          <Link to="https://github.com/Ike-chukwu?tab=repositories">
            <img src={Facebook} alt="" />
          </Link>
          <Link to="https://github.com/Ike-chukwu?tab=repositories">
            <img src={Twitter} alt="" />
          </Link>
          <Link to="https://github.com/Ike-chukwu?tab=repositories">
            <img src={Ig} alt="" />
          </Link>
        </div>
      </div>

      <div className="third">
        <p className="copyright">Copyright 2021. All Rights Reserved</p>
        <div className="iconz">
          <Link to="https://github.com/Ike-chukwu?tab=repositories">
            <img src={Facebook} alt="" />
          </Link>
          <Link to="https://github.com/Ike-chukwu?tab=repositories">
            <img src={Twitter} alt="" />
          </Link>
          <Link to="https://github.com/Ike-chukwu?tab=repositories">
            <img src={Ig} alt="" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;
