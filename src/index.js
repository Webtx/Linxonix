import { createBrowserRouter, RouterProvider } from "react-router-dom";

import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Home/Home.jsx";
import Login from "./components/Login/Login.jsx";
import ErrorPage from "./components/Error/error-page";
import Maki from "./components/Characters/Maki/Maki.jsx";
import Hunter from "./components/Characters/Hunter/Hunter.jsx";
import Amani from "./components/Characters/Amani/Amani.jsx";
import Avatars from "./components/Avatars/Avatars";

import "./global.css";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "login", element: <Login /> },
  { path: "avatars", element: <Avatars /> },
  { path: "maki", element: <Maki /> },
  { path: "hunter", element: <Hunter /> },
  { path: "amani", element: <Amani /> },
  { path: "*", element: <ErrorPage /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
