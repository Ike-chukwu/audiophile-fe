import React from "react";
import "./LinkedBoxes.css";
import { Link } from "react-router-dom";
import data from "../data.json";
import Button from "../Button/Button";

const LinkedBoxes = ({ atualData }) => {
  return atualData.others.map((item, index) => {
    const findName = data.find((d) => d.name == item.name);
    const indexOfConcern = data.findIndex((item) => item.id == findName.id);
    // console.log(indexOfConcern);

    return (
      <div className="box">
        <picture>
          <source srcSet={item.image.mobile} media="(max-width:980px)" />
          <source srcSet={item.image.tablet} media="(max-width:1120px)" />
          <img src={item.image.desktop} alt="" />
        </picture>
        <h3>{item.slug}</h3>
        <Link to={`/product/${indexOfConcern}`}>
          <Button />
        </Link>
      </div>
    );
  });
};

export default LinkedBoxes;
