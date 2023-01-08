import React from 'react'
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

type Props = {}

const HomeSlider = (props: Props) => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      arrows: true,
      autoplaySpeed: 3000,
    };
  return (
    <Slider className="slider-wrapper" {...settings}>
      <div className="slider-item">
        <img src="./img/crs1.png" alt="" />
      </div>
      <div className="slider-item">
        <img src="./img/crs2.png" alt="" />
      </div>
      <div className="slider-item">
        <img src="./img/crs3.png" alt="" />
      </div>
      <div className="slider-item">
        <img src="./img/crs4.png" alt="" />
      </div>
      <div className="slider-item">
        <img src="./img/crs5.png" alt="" />
      </div>
      <div className="slider-item">
        <img src="./img/crs6.png" alt="" />
      </div>
      <div className="slider-item">
        <img src="./img/crs7.png" alt="" />
      </div>
      <div className="slider-item">
        <img src="./img/crs8.png" alt="" />
      </div>
      <div className="slider-item">
        <img src="./img/crs9.png" alt="" />
      </div>
      <div className="slider-item">
        <img src="./img/crs10.png" alt="" />
      </div>
    </Slider>
  );
}

export default HomeSlider