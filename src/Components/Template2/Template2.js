import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Template2.css";
import wD from "../../assets/images/shared/desktop/image-xx59-headphones.jpg";
import wT from "../../assets/images/shared/tablet/image-xx59-headphones.jpg";
import wM from "../../assets/images/shared/mobile/image-xx59-headphones.jpg";
import Button from "../Button/Button";

const Template2 = (props) => {

  return (
    <section className="template-2">
      <div className="desc">
        <p className="colored-title">NEW PRODUCT</p>
        <h4>
          {props.bBreak}
          <br /> {props.aBreak}
        </h4>
        <p className="long-txt">{props.text}</p>
        <Link to={`/product/${props.identification}`}>
          <Button />
        </Link>
      </div>
      <div className="img-category">
        <picture>
          <source srcSet={props.mImg} media="(max-width:950px)" />
          <source srcSet={props.tImg} media="(max-width:1180px)" />
          <img src={props.dImg} alt="" />
        </picture>
      </div>
    </section>
  );
};

export default Template2;
