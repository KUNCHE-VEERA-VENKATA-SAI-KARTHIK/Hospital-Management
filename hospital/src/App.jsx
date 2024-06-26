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
        // {
        //   path: "Logout",
        //   element: <Logout />,
        // },
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
