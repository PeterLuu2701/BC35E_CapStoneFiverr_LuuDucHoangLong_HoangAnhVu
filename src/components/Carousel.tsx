import React from 'react'

type Props = {}

const Carousel = (props: Props) => {
  return (
    <div className="carousel_wrapper">
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-ride="carousel"
        data-interval="1000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./img/1.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item active">
            <img src="./img/2.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item active">
            <img src="./img/3.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item active">
            <img src="./img/4.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item active">
            <img src="./img/5.png" className="d-block w-100" alt="..." />
          </div>
        </div>
      </div>
      <div className="carousel_form">
        <p>Find the perfect freelance services for your business</p>
        <form className="d-flex me-auto mt-2 mt-lg-0">
          <input
            className="form-control search-input-carousel"
            type="text"
            placeholder="Try 'building mobile app'"
          />
          <button className="btn btn-success search-button-carousel" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default Carousel