import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayOut from '../MainLayOut/MainLayOut';
import Home from '../Pages/Home/Home';
import AvailableCars from '../Pages/AvilableCars/AvailableCars';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SignUp/SignUp';
import AddCar from '../Pages/AddCar/AddCar';
import MyCar from '../Components/MyCar/MyCar';
import MyBooking from '../Components/MyBooking/MyBooking';
import Details from '../Pages/Details/Details';
import UpdateBook from '../Components/UpdateBook/UpdateBook';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      errorElement:<Error></Error>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'availableCar',
            element:<AvailableCars></AvailableCars>
        },
        {
            path:'login',
            element:<Login></Login>
        },
        {
            path:'signUp',
            element:<SignUp></SignUp>
        },
        {
          path:'addCar',
          element:<PrivateRoute><AddCar></AddCar></PrivateRoute>
        },
        {
          path:'myCar',
          element:<PrivateRoute><MyCar></MyCar></PrivateRoute>
        },
        {
          path:'myBooking',
          element:<PrivateRoute><MyBooking></MyBooking></PrivateRoute>,
        },
        {
          path:'details/:id',
          element:<Details></Details>,
          loader:({params})=> fetch(`https://car-rental-server-beta.vercel.app/cars/${params.id}`)
        },
        {
          path:'updateBooking/:id',
          element:<UpdateBook></UpdateBook>,
          loader:({params})=> fetch(`https://car-rental-server-beta.vercel.app/bookings/${params.id}`)
        }

      ]
    },
  ]);
  export default router;