import { useState } from "react";

import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
function App() {
  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/", element: <Home /> },
      ],
    },
  ]);

  return (
    <div>
      <Navbar />
      <RouterProvider router={router} />
      <p></p>
    </div>
  );
}

export default App;
