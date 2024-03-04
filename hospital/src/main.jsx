import React from "react";
import ReactDOM from "react-dom/client";

import Home from "./components/Home.jsx";
import "./index.css";
import { Route, RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/Login.jsx";
import Layout from "./components/Layout.jsx";
import Pharmacy from "./components/Pharmacy.jsx";
<<<<<<< HEAD
import Register from "./components/Register.jsx";
=======
import Registration from "./components/Registration.jsx";
>>>>>>> d841195879e200f59e42b5db8267d7fb9d7c552e

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
        element: <Register />,
      },
      {
        path:"Register",
        element:<Registration/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
