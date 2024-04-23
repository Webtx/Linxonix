import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Root from "./routes/Root";
import Card from './card/Card';
import Calc from './components/calc/Calc';
import LstTasks from './components/Task/LstTasks';
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
  }
  

  ,{
    path: "Card"
    ,element: <Card title="Card" prpGnr = "f" prpProfession = "Student" prpName1 = "Annie Yang"></Card>
  }

  ,{
    path: "Calc"
    ,element: <Calc title="Calc"></Calc>
  }

  ,{
    path: "Task"
    ,element: <LstTasks title="Task"></LstTasks>
  }

  
  ,{
    path: "Login"
    ,element: <Login />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
