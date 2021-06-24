import React from "react";
import Products from "./products/Products";
import Video from "../img/My Video.mp4";
import "../App.css"

const LandingPage = () => {
  return (
    <div>
      <video autoplay="autoplay" muted loop="loop" className="myVideo">
      <source src={Video} type="video/mp4" />
      </video>
      <Products types="home" show="2"  />
    </div>
  );
};

export default LandingPage;
