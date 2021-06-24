import React from "react";

import Carousel from "../components/carousel/Carousel";
import "../css/middlePage.css";

const MiddlePage = () => {
  return (
    <div className="Container pr " id="mid_page">
      <div className="test1"></div>
      <div className="test2">
        <Carousel />
      </div>
    </div>
  );
};

export default MiddlePage;
