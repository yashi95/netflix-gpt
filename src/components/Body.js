import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
]);

const Body = () => {
  return (
    <div>
      <RouterProvider router={appRoute} />
    </div>
  );
};

export default Body;
