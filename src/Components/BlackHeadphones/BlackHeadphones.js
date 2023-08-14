import React from "react";
import { Link } from "react-router-dom";
import "./BlackHeadphones.css";
import Button from "../Button/Button";

const BlackHeadphones = (props) => {
  return (
    <section className="blackie">
      <div className="img-category">
        <picture>
          <source srcSet={props.mImg} media="(max-width:950px)" />
          <source srcSet={props.tImg} media="(max-width:1180px)" />
          <img src={props.dImg} alt="" />
        </picture>
      </div>

      <div className="desc">
        <p className="colored-title">NEW PRODUCT</p>
        <h4>
          {props.bBreak} <br /> {props.aBreak}
        </h4>
        <p className="long-txt">{props.text}</p>
        <Link to={`/product/${props.identification}`}> 
          <Button />
        </Link>
      </div>
    </section>
  );
};

export default BlackHeadphones;
