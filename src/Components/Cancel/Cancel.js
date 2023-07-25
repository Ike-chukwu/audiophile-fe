import React from "react";
import "./Cancel.css";
import { Link } from "react-router-dom";

const Cancel = () => {
  return (
    <div className="cancel">
      <div className="covering">
        <p>Your payment has been cancelled</p>
        <Link to="/">
          <button>BACK TO HOME</button>
        </Link>
      </div>
    </div>
  );
};

export default Cancel;
