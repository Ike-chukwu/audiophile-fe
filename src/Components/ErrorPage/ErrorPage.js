import React from "react";
import "./ErrorPage.css";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="error-container">
      <div className="error-body">
        Sorry! An error has occured. <br /> Please try again!
      </div>
      <button
        onClick={() => {
          navigate("/");
        }}
        className="error-btn"
      >
        Back to home
      </button>
    </div>
  );
};

export default ErrorPage;
