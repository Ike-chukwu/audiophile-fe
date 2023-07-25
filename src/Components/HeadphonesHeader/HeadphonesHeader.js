import React from "react";
import "./HeadphonesHeader.css";

const HeadphonesHeader = (props) => {
  return (
    <section className="headie">
      <h1>{props.content}</h1>
    </section>
  );
};

export default HeadphonesHeader;
