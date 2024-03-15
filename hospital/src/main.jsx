import React from "react";
import ReactDOM from "react-dom/client";

import Home from "./components/Home.jsx";
import "./index.css";
import { Route, RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/Login.jsx";
import Layout from "./components/Layout.jsx";
import Pharmacy from "./components/Pharmacy.jsx";

import Cart from "./components/Cart.jsx";
import Labtest from "./components/Labtest.jsx";
import Register from "./components/Register.jsx";
import Registration from "./components/Registration.jsx";
import App from "./App.jsx";

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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
