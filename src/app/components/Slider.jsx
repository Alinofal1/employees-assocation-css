import React from "react";
import { CiCircleChevDown, CiCircleChevUp } from "react-icons/ci";
import { sliderImages } from "../data";

export default function Slider() {
  return (
    <div className="heroSlider">
      <CiCircleChevUp size={36} className="up" />
      <div id="sliderImages">
        {sliderImages.map((img) => (
          <img
            onClick={() => setActiveImg(img.img)}
            key={img.id}
            src={img.img}
            alt="img"
          />
        ))}
      </div>
      <CiCircleChevDown size={36} className="down" />
    </div>
  );
}
