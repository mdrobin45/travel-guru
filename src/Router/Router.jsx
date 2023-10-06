import { createBrowserRouter } from "react-router-dom";
import Booking from "../Pages/Booking/Booking";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Search from "../Pages/Search/Search";
import Root from "../Root/Root";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Root />,
      children: [
         {
            path: "/",
            element: <Home />,
         },
         {
            path: "/destination",
            element: <h2>Destination</h2>,
         },
         {
            path: "/blog",
            element: <h2>Blog</h2>,
         },
         {
            path: "/contact",
            element: <h2>Contact</h2>,
         },
         {
            path: "/book",
            element: <Booking />,
            children: [
               {
                  path: "/book/:id",
                  element: <Booking />,
               },
            ],
         },
         {
            path: "/login",
            element: <Login />,
         },
         {
            path: "/register",
            element: <Register />,
         },
         {
            path: "/search",
            element: <Search />,
         },
      ],
   },
]);

export default router;
