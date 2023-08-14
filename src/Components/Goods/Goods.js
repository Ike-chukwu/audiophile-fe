import React from "react";
import "./Goods.css";
import { Link } from "react-router-dom";
import Card from "../Navbar/MobileNav/Card/Card";
import earphones from "../../assets/images/shared/desktop/image-category-thumbnail-earphones.png";
import headphones from "../../assets/images/shared/desktop/image-category-thumbnail-headphones.png";
import speaker from "../../assets/images/shared/desktop/image-category-thumbnail-speakers.png";

const Goods = () => {
  return (
    <section className="">
      <div className="goods">
        <Link to="/headphones" className="prod headset">
          <Card setStyle="headset" source={headphones} pContent="headphones" />
        </Link>
        <Link className="prod" to="/speakers">
          <Card setStyle="" source={speaker} pContent="Speakers" />
        </Link>
        <Link className="prod earphones" to="/earphones">
          <Card setStyle="earphones" source={earphones} pContent="Earphones" />
        </Link>
      </div>
    </section>
  );
};

export default Goods;
