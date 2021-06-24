import React from "react";

import image1 from "../../images/carousel/image1.png";
import image2 from "../../images/carousel/image2.png";
import Carousel, { consts } from "react-elastic-carousel";

const Carouse = () => {
  function myArrow({ type, onClick, isEdge }) {
    const pointer = type === consts.PREV ? "" : "";
    return (
      <button onClick={onClick} disabled={isEdge}>
        {pointer}
      </button>
    );
  }
  return (
    <Carousel itemsToShow={4} renderArrow={myArrow}>
      <img alt="Carousel " src={image1} />

      <img alt="Carousel " src={image2} />

      <img alt="Carousel " src={image1} />

      <img alt="Carousel " src={image2} />
      <img alt="Carousel " src={image1} />
      <img alt="Carousel " src={image2} />
      <img alt="Carousel " src={image1} />

      <img alt="Carousel " src={image2} />
      <img alt="Carousel " src={image1} />

      <img alt="Carousel " src={image2} />
      <img alt="Carousel " src={image1} />

      <img alt="Carousel " src={image2} />
    </Carousel>
  );
};

export default Carouse;
