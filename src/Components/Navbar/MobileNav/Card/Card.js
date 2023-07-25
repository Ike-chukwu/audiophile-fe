import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className={`prod ${props.setStyle}`}>
      <img src={props.source} alt="" />
      <div className="content">
        <p>{props.pContent}</p>
        <span className="linker">
          SHOP <i className="fas fa-chevron-right"></i>
        </span>
      </div>
    </div>
  );
};

export default Card;
