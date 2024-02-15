import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import "./Carousel.css";
let data = [
  {
    src: "https://wallpapers.com/images/hd/vegetables-pictures-qs8trfk65nvldcyr.jpg",
    alt: "Image 1 for carousel",
  },
  {
    src: "https://e0.pxfuel.com/wallpapers/311/847/desktop-wallpaper-spinach-leaves-vegetable-close-up-for-iphone-8-iphone-7-plus-iphone-6-sony-xperia-z-htc-one-maiden.jpg",
    alt: "Image 2 for carousel",
  },
  {
    src: "https://c1.wallpaperflare.com/preview/837/823/706/kohl-plant-vegetables-edible.jpg",
    alt: "Image 3 for carousel",
  },
];
const Carousel = () => {
  const [slide, setSlide] = useState(0);
  const [arrorright, setarrorright] = useState("noarrow-right");
  const [arrorleft, setarrorleft] = useState("noarrow-left");
  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };


  const handlemouseEnter = () => {
    setarrorleft("arrow-right");
    setarrorright("arrow-left");
  };
  const handleMouseLeave = () => {
    setarrorleft("noarrow-right");
    setarrorright("noarrow-left");
  };
  return (
    <div
      className="carousel"
      onMouseEnter={handlemouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <BsArrowLeftCircleFill onClick={prevSlide} className={arrorright} />
      {data.map((item, idx) => {
        return (
          <img
            src={item.src}
            alt={item.alt}
            key={idx}
            className={slide === idx ? "slide" : "slide slide-hidden"}
          />
        );
      })}
      <BsArrowRightCircleFill onClick={nextSlide} className={arrorleft} />
      <span className="indicators">
        {data.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span>
      <div className="organic_text">
        <div>
          <h4>100% ORGANIC</h4>
        </div>
        <div className="organic_text_button">
          <button>BUY</button>
        </div>
      </div>
    </div>
  );
};
export default Carousel;
