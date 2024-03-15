import React from "react";
import { Link, NavLink } from "react-router-dom";
// import userContextprovider from "../context/userContextprovider";
import { useContext } from "react";

import mlogo from "../assets/mlogo.png";
import c1 from "../assets/c1.jpg";
import im1 from "../assets/im1.jpg";
import im2 from "../assets/im2.jpg";
// import UserContext from "../context/Context.js";

export default function Navbar() {
  // const { uname } = useContext(UserContext);

  return (
    <div>
      <div className="relative mb-2">
        <div className="absolute ml-8 ">
          <img
            className="max-h-12  justify-items-start rounded-3xl mt-1"
            src={mlogo}
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
              <span className="nav-link active" aria-current="page" href="#">
                Home
              </span>
            </li>
          </NavLink>
          <NavLink
            className={({ isActive }) => {
              isActive ? "normal" : "underline";
            }}
            to="Pharmacy"
          >
            <li className="nav-item">
              <span className="nav-link" href="#">
                Pharmacy
              </span>
            </li>
          </NavLink>
          <NavLink
            className={({ isActive }) => {
              isActive ? "font-bold" : "normal";
            }}
            to="Labtest"
          >
            <li className="nav-item">
              <span className="nav-link" href="#">
                Lab tests
              </span>
            </li>
          </NavLink>
          <li className="nav-item">
            <span className="nav-link " href="#">
              Reports
            </span>
          </li>
          {/* if(data)? <avatar /> : */}
          <NavLink
            className={({ isActive }) => {
              isActive ? "font-bold" : "normal";
            }}
            to="Login"
          >
            <div className="absolute ml-[300px]">
              <li className="nav-item">
                <span className="nav-link ">Login</span>
              </li>
            </div>
          </NavLink>
          <NavLink
            className={({ isActive }) => {
              isActive ? "font-bold" : "normal";
            }}
            to="Register"
          >
            <div className="absolute ml-[450px]">
              <li className="nav-item">
                <a className="nav-link ">Register</a>
              </li>
            </div>
          </NavLink>
          <NavLink
            className={({ isActive }) => {
              isActive ? "font-bold" : "normal";
            }}
            to="Cart"
          >
            <div className="absolute ">
              <li className="nav-item">
                <a className="nav-link  ">Cart</a>
              </li>
            </div>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}
