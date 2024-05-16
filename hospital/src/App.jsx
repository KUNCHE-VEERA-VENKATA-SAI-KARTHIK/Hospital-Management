import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Home from "./components/Home.jsx";
import  './App.css'

import { Route, RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/Login.jsx";
import Layout from "./components/Layout.jsx";
import Pharmacy from "./components/Pharmacy.jsx";

import Cart from "./components/Cart.jsx";
import Labtest from "./components/Labtest.jsx";
import Register from "./components/Register.jsx";
import Registration from "./components/Registration.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Docdashboard from "./components/Docdashboard.jsx";
import Docdetails from "./components/Docdetails.jsx";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "Login",
          element: <Login />,
        },
        {
          path: "Pharmacy",
          element: <Pharmacy />,
        },
        {
          path: "Register",
          element: <Registration />,
        },
        {
          path: "Labtest",
          element: <Labtest />,
        },

        {
          path: "Cart",
          element: <Cart />,
        },
        {
          path: "Dashboard",
          element: <Dashboard />,
        },
        {
          path:"Docdashboard",
          element: <Docdashboard/>,
        },
        {
          path: "Docdetails",
          element: <Docdetails/>,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
