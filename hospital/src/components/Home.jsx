import React from "react";
import c2 from "../assets/k2.png";
import c1 from "../assets/c1.jpg";
import im1 from "../assets/im1.jpg";
import im2 from "../assets/im2.jpg";

export default function Home() {
  return (
    <div>
      <div>
        <ul className="nav justify-content-center">
          <li className="nav-item px-6">
            <img
              className="max-h-10  justify-items-start rounded-2xl"
              src={c2}
              alt="no image foound"
            />
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Pharmacy
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Lab tests
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link ">Reports</a>
          </li>
        </ul>
      </div>
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
  );
}
