import React from "react";
import Carousel from "../../components/Carousel";
import "~slick-carousel/slick/slick.css";
import "~slick-carousel/slick/slick-theme.css";

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
          <h2>Popular professional services</h2>
          <div className="slider-package">
            <div className="mt-4">
              <div className="slick-slider slick-initialized" dir="ltr">
                <div
                  className="slick-arrow slick-prev"
                  style={{
                    display: "block",
                    borderRadius: "50%",
                    color: "rgb(255, 255, 255)",
                  }}
                />
                <div className="slick-list">
                  <div
                    className="slick-track"
                    style={{
                      width: 6150,
                      opacity: 1,
                      transform: "translate3d(-1230px, 0px, 0px)",
                    }}
                  >
                    <div
                      data-index={-5}
                      tabIndex={-1}
                      className="slick-slide slick-cloned"
                      aria-hidden="true"
                      style={{ width: 246 }}
                    >
                      <div>
                        <div
                          tabIndex={-1}
                          style={{ width: "100%", display: "inline-block" }}
                        >
                          <img
                            className="w-100"
                            src="./img/crs6.png"
                            alt="..."
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      data-index={-4}
                      tabIndex={-1}
                      className="slick-slide slick-cloned"
                      aria-hidden="true"
                      style={{ width: 246 }}
                    >
                      <div>
                        <div
                          tabIndex={-1}
                          style={{ width: "100%", display: "inline-block" }}
                        >
                          <img
                            className="w-100"
                            src="./img/crs7.png"
                            alt="..."
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      data-index={-3}
                      tabIndex={-1}
                      className="slick-slide slick-cloned"
                      aria-hidden="true"
                      style={{ width: 246 }}
                    >
                      <div>
                        <div
                          tabIndex={-1}
                          style={{ width: "100%", display: "inline-block" }}
                        >
                          <img
                            className="w-100"
                            src="./img/crs8.png"
                            alt="..."
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      data-index={-2}
                      tabIndex={-1}
                      className="slick-slide slick-cloned"
                      aria-hidden="true"
                      style={{ width: 246 }}
                    >
                      <div>
                        <div
                          tabIndex={-1}
                          style={{ width: "100%", display: "inline-block" }}
                        >
                          <img
                            className="w-100"
                            src="./img/crs9.png"
                            alt="..."
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      data-index={-1}
                      tabIndex={-1}
                      className="slick-slide slick-cloned"
                      aria-hidden="true"
                      style={{ width: 246 }}
                    >
                      <div>
                        <div
                          tabIndex={-1}
                          style={{ width: "100%", display: "inline-block" }}
                        >
                          <img
                            className="w-100"
                            src="./img/crs10.png"
                            alt="..."
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      data-index={0}
                      className="slick-slide slick-active slick-current"
                      tabIndex={-1}
                      aria-hidden="false"
                      style={{ outline: "none", width: 246 }}
                    >
                      <div>
                        <div
                          tabIndex={-1}
                          style={{ width: "100%", display: "inline-block" }}
                        >
                          <img
                            className="w-100 "
                            src="./img/crs1.png"
                            alt="..."
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      data-index={1}
                      className="slick-slide slick-active"
                      tabIndex={-1}
                      aria-hidden="false"
                      style={{ outline: "none", width: 246 }}
                    >
                      <div>
                        <div
                          tabIndex={-1}
                          style={{ width: "100%", display: "inline-block" }}
                        >
                          <img
                            className="w-100"
                            src="./img/crs2.png"
                            alt="..."
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      data-index={2}
                      className="slick-slide slick-active"
                      tabIndex={-1}
                      aria-hidden="false"
                      style={{ outline: "none", width: 246 }}
                    >
                      <div>
                        <div
                          tabIndex={-1}
                          style={{ width: "100%", display: "inline-block" }}
                        >
                          <img
                            className="w-100"
                            src="./img/crs3.png"
                            alt="..."
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      data-index={3}
                      className="slick-slide slick-active"
                      tabIndex={-1}
                      aria-hidden="false"
                      style={{ outline: "none", width: 246 }}
                    >
                      <div>
                        <div
                          tabIndex={-1}
                          style={{ width: "100%", display: "inline-block" }}
                        >
                          <img
                            className="w-100"
                            src="./img/crs4.png"
                            alt="..."
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      data-index={4}
                      className="slick-slide slick-active"
                      tabIndex={-1}
                      aria-hidden="false"
                      style={{ outline: "none", width: 246 }}
                    >
                      <div>
                        <div
                          tabIndex={-1}
                          style={{ width: "100%", display: "inline-block" }}
                        >
                          <img
                            className="w-100"
                            src="./img/crs5.png"
                            alt="..."
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      data-index={5}
                      className="slick-slide"
                      tabIndex={-1}
                      aria-hidden="true"
                      style={{ outline: "none", width: 246 }}
                    >
                      <div>
                        <div
                          tabIndex={-1}
                          style={{ width: "100%", display: "inline-block" }}
                        >
                          <img
                            className="w-100"
                            src="./img/crs6.png"
                            alt="..."
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      data-index={6}
                      className="slick-slide"
                      tabIndex={-1}
                      aria-hidden="true"
                      style={{ outline: "none", width: 246 }}
                    >
                      <div>
                        <div
                          tabIndex={-1}
                          style={{ width: "100%", display: "inline-block" }}
                        >
                          <img
                            className="w-100"
                            src="./img/crs7.png"
                            alt="..."
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      data-index={7}
                      className="slick-slide"
                      tabIndex={-1}
                      aria-hidden="true"
                      style={{ outline: "none", width: 246 }}
                    >
                      <div>
                        <div
                          tabIndex={-1}
                          style={{ width: "100%", display: "inline-block" }}
                        >
                          <img
                            className="w-100"
                            src="./img/crs8.png"
                            alt="..."
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      data-index={8}
                      className="slick-slide"
                      tabIndex={-1}
                      aria-hidden="true"
                      style={{ outline: "none", width: 246 }}
                    >
                      <div>
                        <div
                          tabIndex={-1}
                          style={{ width: "100%", display: "inline-block" }}
                        >
                          <img
                            className="w-100"
                            src="./img/crs9.png"
                            alt="..."
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      data-index={9}
                      className="slick-slide"
                      tabIndex={-1}
                      aria-hidden="true"
                      style={{ outline: "none", width: 246 }}
                    >
                      <div>
                        <div
                          tabIndex={-1}
                          style={{ width: "100%", display: "inline-block" }}
                        >
                          <img
                            className="w-100"
                            src="./img/crs10.png"
                            alt="..."
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      data-index={10}
                      tabIndex={-1}
                      className="slick-slide slick-cloned"
                      aria-hidden="true"
                      style={{ width: 246 }}
                    >
                      <div>
                        <div
                          tabIndex={-1}
                          style={{ width: "100%", display: "inline-block" }}
                        >
                          <img
                            className="w-100 "
                            src="./img/crs1.png"
                            alt="..."
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      data-index={11}
                      tabIndex={-1}
                      className="slick-slide slick-cloned"
                      aria-hidden="true"
                      style={{ width: 246 }}
                    >
                      <div>
                        <div
                          tabIndex={-1}
                          style={{ width: "100%", display: "inline-block" }}
                        >
                          <img
                            className="w-100"
                            src="./img/crs2.png"
                            alt="..."
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      data-index={12}
                      tabIndex={-1}
                      className="slick-slide slick-cloned"
                      aria-hidden="true"
                      style={{ width: 246 }}
                    >
                      <div>
                        <div
                          tabIndex={-1}
                          style={{ width: "100%", display: "inline-block" }}
                        >
                          <img
                            className="w-100"
                            src="./img/crs3.png"
                            alt="..."
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      data-index={13}
                      tabIndex={-1}
                      className="slick-slide slick-cloned"
                      aria-hidden="true"
                      style={{ width: 246 }}
                    >
                      <div>
                        <div
                          tabIndex={-1}
                          style={{ width: "100%", display: "inline-block" }}
                        >
                          <img
                            className="w-100"
                            src="./img/crs4.png"
                            alt="..."
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      data-index={14}
                      tabIndex={-1}
                      className="slick-slide slick-cloned"
                      aria-hidden="true"
                      style={{ width: 246 }}
                    >
                      <div>
                        <div
                          tabIndex={-1}
                          style={{ width: "100%", display: "inline-block" }}
                        >
                          <img
                            className="w-100"
                            src="./img/crs5.png"
                            alt="..."
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      data-index={15}
                      tabIndex={-1}
                      className="slick-slide slick-cloned"
                      aria-hidden="true"
                      style={{ width: 246 }}
                    >
                      <div>
                        <div
                          tabIndex={-1}
                          style={{ width: "100%", display: "inline-block" }}
                        >
                          <img
                            className="w-100"
                            src="./img/crs6.png"
                            alt="..."
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      data-index={16}
                      tabIndex={-1}
                      className="slick-slide slick-cloned"
                      aria-hidden="true"
                      style={{ width: 246 }}
                    >
                      <div>
                        <div
                          tabIndex={-1}
                          style={{ width: "100%", display: "inline-block" }}
                        >
                          <img
                            className="w-100"
                            src="./img/crs7.png"
                            alt="..."
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      data-index={17}
                      tabIndex={-1}
                      className="slick-slide slick-cloned"
                      aria-hidden="true"
                      style={{ width: 246 }}
                    >
                      <div>
                        <div
                          tabIndex={-1}
                          style={{ width: "100%", display: "inline-block" }}
                        >
                          <img
                            className="w-100"
                            src="./img/crs8.png"
                            alt="..."
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      data-index={18}
                      tabIndex={-1}
                      className="slick-slide slick-cloned"
                      aria-hidden="true"
                      style={{ width: 246 }}
                    >
                      <div>
                        <div
                          tabIndex={-1}
                          style={{ width: "100%", display: "inline-block" }}
                        >
                          <img
                            className="w-100"
                            src="./img/crs9.png"
                            alt="..."
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      data-index={19}
                      tabIndex={-1}
                      className="slick-slide slick-cloned"
                      aria-hidden="true"
                      style={{ width: 246 }}
                    >
                      <div>
                        <div
                          tabIndex={-1}
                          style={{ width: "100%", display: "inline-block" }}
                        >
                          <img
                            className="w-100"
                            src="./img/crs10.png"
                            alt="..."
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="slick-arrow slick-next"
                  style={{ display: "block", borderRadius: "50%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
