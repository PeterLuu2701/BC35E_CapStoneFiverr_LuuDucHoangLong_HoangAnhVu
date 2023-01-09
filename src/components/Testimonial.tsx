import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

type Props = {};

const Testimonial = (props: Props) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="container">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active testimonial_modal">
            <ModalVideo
              channel="youtube"
              isOpen={isOpen}
              videoId="o1B6v1VWxG4"
              onClose={() => setOpen(false)}
            />
            <button type="button" className="testimonial_btn btn btn-none">
              <img
                className="modal-img-slick"
                src="./img/testimonial1.png"
                alt="testimonial1"
                style={{ width: "100%" }}
                onClick={() => setOpen(true)}
              />
            </button>
            <div className="testimonial_text">
              <div
                className="d-flex align-items-center"
                style={{ paddingBottom: 16 }}
              >
                <span>Kay Kim, Co-Founder </span>
                <span className="testimonial-logo">
                  <img
                    className="img-rooted"
                    alt="Company logo"
                    src="./img/testimonial1logo.png"
                    loading="lazy"
                    style={{ width: "50%" }}
                  />
                </span>
              </div>
              <div className="quote_modal">
                <i>
                  "It's extremely exciting that Fiverr has freelancers from all
                  over the world — it broadens the talent pool. One of the best
                  things about Fiverr is that while we're sleeping, someone's
                  working."
                </i>
              </div>
            </div>
          </div>
          <div className="carousel-item testimonial_modal">
            <ModalVideo
              channel="youtube"
              isOpen={isOpen}
              videoId="OFuRCfBznVI"
              onClose={() => setOpen(false)}
            />
            <button type="button" className="testimonial_btn btn btn-none">
              <img
                className="modal-img-slick"
                src="./img/testimonial2.png"
                alt="testimonial1"
                style={{ width: "100%" }}
                onClick={() => setOpen(true)}
              />
            </button>
            <div className="testimonial_text">
              <div
                className="d-flex align-items-center"
                style={{ paddingBottom: 16 }}
              >
                <span>Caitlin Tormey, Chief Commercial Officer </span>
                <span className="testimonial-logo">
                  <img
                    className="img-rooted"
                    alt="Company logo"
                    src="./img/testimonial2logo.png"
                    loading="lazy"
                    style={{ width: "50%" }}
                  />
                </span>
              </div>
              <div className="quote_modal">
                <i>
                  "We've used Fiverr for Shopify web development, graphic
                  design, and backend web development. Working with Fiverr makes
                  my job a little easier every day."
                </i>
              </div>
            </div>
          </div>
          <div className="carousel-item testimonial_modal">
            <ModalVideo
              channel="youtube"
              isOpen={isOpen}
              videoId="QYjP0-hlESI"
              onClose={() => setOpen(false)}
            />
            <button type="button" className="testimonial_btn btn btn-none">
              <img
                className="modal-img-slick"
                src="./img/testimonial3.png"
                alt="testimonial1"
                style={{ width: "100%" }}
                onClick={() => setOpen(true)}
              />
            </button>
            <div className="testimonial_text">
              <div
                className="d-flex align-items-center"
                style={{ paddingBottom: 16 }}
              >
                <span>Brighid Gannon (DNP, PMHNP-BC), Co-Founder </span>
                <span className="testimonial-logo">
                  <img
                    className="img-rooted"
                    alt="Company logo"
                    src="./img/testimonial3logo.png"
                    loading="lazy"
                    style={{ width: "50%" }}
                  />
                </span>
              </div>
              <div className="quote_modal">
                <i>
                  "We used Fiverr for SEO, our logo, website, copy, animated
                  videos — literally everything. It was like working with a
                  human right next to you versus being across the world."
                </i>
              </div>
            </div>
          </div>
          <div className="carousel-item testimonial_modal">
            <ModalVideo
              channel="youtube"
              isOpen={isOpen}
              videoId="sJTJXOE4ceY"
              onClose={() => setOpen(false)}
            />
            <button type="button" className="testimonial_btn btn btn-none">
              <img
                className="modal-img-slick"
                src="./img/testimonial4.png"
                alt="testimonial1"
                style={{ width: "100%" }}
                onClick={() => setOpen(true)}
              />
            </button>
            <div className="testimonial_text">
              <div
                className="d-flex align-items-center"
                style={{ paddingBottom: 16 }}
              >
                <span>Tim and Dan Joo, Co-Founders </span>
                <span className="testimonial-logo">
                  <img
                    className="img-rooted"
                    alt="Company logo"
                    src="./img/testimonial4logo.png"
                    loading="lazy"
                    style={{ width: "50%" }}
                  />
                </span>
              </div>
              <div className="quote_modal">
                <i>
                  "When you want to create a business bigger than yourself, you
                  need a lot of help. That's what Fiverr does."
                </i>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
