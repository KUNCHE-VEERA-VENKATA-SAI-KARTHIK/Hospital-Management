import React from "react";
import { Link, NavLink } from "react-router-dom";

import c2 from "../assets/k2.png";
import c1 from "../assets/c1.jpg";
import im1 from "../assets/im1.jpg";
import im2 from "../assets/im2.jpg";

export default function Navbar() {
  return (
    <div >
      <div className="relative mb-2" >
        <div className="absolute ml-8 ">
          <img
            className="max-h-10  justify-items-start rounded-3xl mt-1"
            src={c2}
            alt="no image foound"
          />
        </div>
        <ul className="nav justify-content-center ">
          <li className="nav-item px-6"></li>
          <NavLink
            className={({ isActive }) => {
              isActive ? "normal" : "underline";
            }}
            to="/"
          >
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
          </NavLink>
          <NavLink
            className={({ isActive }) => {
              isActive ? "normal" : "underline";
            }}
            to="Pharmacy"
          >
          <li className="nav-item">
            <a className="nav-link" href="#">
              Pharmacy
            </a>
          </li>
          </NavLink>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Lab tests
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#" >Reports</a>
          </li>
          <NavLink
            className={({ isActive }) => {
              isActive ? "font-bold" : "normal";
            }}
            to="Login">
              <div className="absolute ml-[400px]">
              <li className="nav-item">
              <a className="nav-link ">Login</a>
              </li>
              </div>

          </NavLink>

        </ul>
      </div>
    </div>
  );
}
