import React from "react";
import "./Goods.css";
import { Link, NavLink } from "react-router-dom";

import Card from "../Navbar/MobileNav/Card/Card";
import earphones from "../../assets/images/shared/desktop/image-category-thumbnail-earphones.png";
import headphones from "../../assets/images/shared/desktop/image-category-thumbnail-headphones.png";
import speaker from "../../assets/images/shared/desktop/image-category-thumbnail-speakers.png";

{
  /* <Routes>
<Route path="/headphones" element={<HeadphonesPage />} />
</Routes>
<Routes>
<Route path="/speakers" element={<Speaker />} />
</Routes>
<Routes>
<Route path="/earphones" element={<WirelessEarphonepage />} />
</Routes> */
}

const Goods = () => {
  return (
    <section className="">
      {/* <Routes>
        <Route path="/headphones" element={<HeadphonesPage />} />
      </Routes> */}
      {/*       
      <Card setStyle="headset" source={headphones} pContent="headphones" />
      <Card setStyle="" source={speaker} pContent="Speakers" />
      <Card setStyle="earphones" source={earphones} pContent="Earphones" /> */}
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
