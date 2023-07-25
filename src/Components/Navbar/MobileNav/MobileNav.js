import React, { useEffect } from "react";
import "./MobileNav.css";
import earphones from "../../../assets/images/shared/desktop/image-category-thumbnail-earphones.png";
import headphones from "../../../assets/images/shared/desktop/image-category-thumbnail-headphones.png";
import speaker from "../../../assets/images/shared/desktop/image-category-thumbnail-speakers.png";
import { Link } from "react-router-dom";
import Card from "./Card/Card";

const MobileNav = (props) => {
  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.style.overflow = props.setting ? "hidden" : "auto";
    }
  }, [props.setting]);

  return (
    <div className={props.setting ? "cover active" : "cover"}>
      <div className="products">
        <Link to="/headphones" className="prod headset">
          <Card setStyle="headset" source={headphones} pContent="headphones" />
        </Link>
        <Link className="prod" to="/speakers">
          <Card setStyle="" source={speaker} pContent="Speakers" />
        </Link>
        <Link className="prod earphones" to="/earphones">
          <Card setStyle="earphones" source={earphones} pContent="Earphones" />
        </Link>
        {/* <Card setStyle="headset" source={headphones} pContent="headphones" />
        <Card setStyle="" source={speaker} pContent="Speakers" />
        <Card setStyle="earphones" source={earphones} pContent="Earphones" /> */}
      </div>
    </div>
  );
};

export default MobileNav;