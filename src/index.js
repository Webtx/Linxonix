import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Root from "./routes/Root";
import Home from './components/home/Home';
import Login from  './components/login/Login';
import ErrorPage from './error-page';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
   {
    path: "/"
    ,element: <Root />//,element: <div>Hello world!</div>
    , errorElement: <ErrorPage />
    , element: <Login />
    
  }
  

  

  ,{
    path: "Home"
    ,element: <Home title="home"></Home>
  }

  

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
