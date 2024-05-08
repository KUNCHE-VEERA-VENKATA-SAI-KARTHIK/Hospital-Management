import React from "react";
import { Link, NavLink } from "react-router-dom";
// import userContextprovider from "../context/userContextprovider";
import { useContext } from "react";
import { Dropdown, DropdownItem } from 'flowbite-react';
import { Avatar } from 'flowbite-react';

import mlogo from "../assets/mlogo.png";

// import UserContext from "../context/Context.js";

export default function Navbar() {
  // const { uname } = useContext(UserContext);

  return (
    <div>
      <div className="relative mb-7">
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
          {/* if(data)? <avatar /> : */}
          <div className="absolute ml-[1080px] bg-white border-none">
          <Dropdown
         label={<Avatar  className="bg-white white " rounded />}
          color="light"
          border="none"
          className="w-full	border-transparent"
          dismissOnClick={false}
          theme={{ floating: { target: "w-full" } }}>
            <DropdownItem >
                <NavLink
                className={({ isActive }) => {
                  isActive ? "font-bold" : "normal";
                }}
                to="Login"
              >
                <div>
                  <li className="nav-item">
                    <span className="nav-link ">Login</span>
                  </li>
                </div>
              </NavLink>
            </DropdownItem>
            <DropdownItem>
                <NavLink
                className={({ isActive }) => {
                  isActive ? "font-bold" : "normal";
                }}
                to="Register"
              >
                <div >
                  <li className="nav-item">
                    <a className="nav-link ">Register</a>
                  </li>
                </div>
              </NavLink> 
            </DropdownItem>
          </Dropdown>
          </div>

        </ul>
      </div>
    </div>
  );
}
