import React from "react";
import data from "../data.json";
import "./GoodsDisplay.css";
import OrangeSpeaker from "./OrangeSpeaker/OrangeSpeaker";
import GreySpeaker from "./GreySpeaker/GreySpeaker";
import Earphones from "./Earphones/Earphones";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
const GoodsDisplay = () => {
  return (
    <section>
      {data.map((d, index) => {
        if (index == 1) {
          return <OrangeSpeaker identification={d.id} category={d.category} />;
        }
        if (index == 2) {
          return <GreySpeaker identification={d.id} category={d.category} />;
        }
        if (index == 3) {
          return <Earphones identification={d.id} category={d.category} />;
        }
      })}
    </section>
  );
};

export default GoodsDisplay;
