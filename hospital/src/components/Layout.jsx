import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import UserContext from "../context/Context";
// import userContextprovider from "../context/userContextprovider";

export default function Layout() {
  const [isloggedin, setIsloggedin] = useState(false);
  const [username, setUsername] = useState("");
  return (
    <div>
     <UserContext.Provider
      value={{ isloggedin, setIsloggedin, username, setUsername }}
    >
      <Navbar />
      <Outlet />
      <Footer />
      </UserContext.Provider>
    </div>
  );
}
