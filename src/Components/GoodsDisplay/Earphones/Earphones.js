import React from "react";
import "./Earphones.css";
import EarphonesDd from "../../../assets/images/home/desktop/image-earphones-yx1.jpg";
import EarphonesTt from "../../../assets/images/home/desktop/image-earphones-yx1.jpg";
import EarphonesMm from "../../../assets/images/home/desktop/image-earphones-yx1.jpg";
import Button from "../../Button/Button";
import {Link} from "react-router-dom"

const Earphones = (props) => {
  return (
    <div className="dark-earphones">
      <div className="left-side">
        <picture>
          <source srcSet={EarphonesMm} media="(max-width:750px)" />
          <source srcSet={EarphonesTt} media="(max-width:1120px)" />
          <img src={EarphonesDd} alt="" />
        </picture>
      </div>
      <div className="right-side">
        <h3>Yx1 Earphones</h3>
        <Link to={`/product/${props.identification}`}> 
          <Button />
        </Link>
      </div>
    </div>
  );
};

export default Earphones;
