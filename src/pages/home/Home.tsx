import React from "react";
import Carousel from "../../components/Carousel";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import HomeSlider from "../../components/HomeSlider";
import SellingProposition from "../../components/SellingProposition";

type Props = {};

const Home = (props: Props) => {

    

  return (
    <div>
      <Carousel />
      <div className="home">
        <div className="trusted-by">
          <div className="trusted-by-wrapper d-flex justify-content-center align-items-center">
            <span className="trusted-by-text">Trusted by:</span>
            <ul className="d-flex trusted-by-logo align-items-center">
              <li className="li">
                <img className="height-3 w-100" src="./img/fb.png" alt="fb" />
              </li>
              <li className="li">
                <img
                  className="height-3 w-100"
                  src="./img/google.png"
                  alt="google"
                />
              </li>
              <li className="li">
                <img className="w-100" src="./img/netflix.png" alt="netflix" />
              </li>
              <li className="li">
                <img src="./img/pg.png" alt="pg" />
              </li>
              <li>
                <img
                  className="height-3 w-100 paypal"
                  src="./img/paypal.png"
                  alt="paypal"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <section className="subcategory-carousel">
        <div className="container">
          <h2 className="home_slider_text">Popular professional services</h2>
          <div className="slider-package">
            <div className="mt-4">
              <HomeSlider/>
            </div>
          </div>
        </div>
      </section>
      <section className="selling_proposition">
        <SellingProposition/>
      </section>
    </div>
  );
};

export default Home;
