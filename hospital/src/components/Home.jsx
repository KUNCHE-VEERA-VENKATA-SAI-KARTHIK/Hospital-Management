import React from "react";
import c2 from "../assets/k2.png";
import c1 from "../assets/c1.jpg";
import im1 from "../assets/im1.jpg";
import im2 from "../assets/im2.jpg";
import Tiles from "./Tiles";
import About from "./About";
export default function Home() {
  return (
    <>

    <div>
      {/* carosel */}
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={c1} className="d-block w-100" alt="c2" />
          </div>
          <div className="carousel-item">
            <img src={im1} className="d-block w-100" alt="im1" />
          </div>
          <div className="carousel-item">
            <img src={im2} className="d-block w-100" alt="im2" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="">Next</span>
        </button>
      </div>
    </div>
<Tiles/>
<About/>
    </>
  );
}
