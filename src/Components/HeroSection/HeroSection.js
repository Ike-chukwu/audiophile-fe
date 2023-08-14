import React from "react";
import "./HeroSection.css";
import Button from "../Button/Button";
import {Link} from "react-router-dom"

const HeroSection = (props) => {

  return (
    <section className="hero">
      <div className="text">
        <span>NEW PRODUCT</span>
        <h1>
          XX99 MARK II <br /> HEADPHONES
        </h1>
        <p>
          Experience natural, lifelike audio and exceptional <br /> build
          quality made for the passionate music <br /> enthusiast.
        </p>
      </div>
      <Link to={`/product/${props.identificaton}`}>
        <Button />
      </Link>
    </section>
  );
};

export default HeroSection;
