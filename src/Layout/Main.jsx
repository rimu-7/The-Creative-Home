import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
  const location = useLocation();
  const hideNavbar = location.pathname === "/";
  const hiddenFooter = location.pathname === "/";


  return (
    <div className="bg-gray-200 dark:bg-[#414141] text-black dark:text-white duration-700 ease-in-out min-h-screen flex flex-col">
      {!hideNavbar && <Navbar />}
      <div className="flex-grow">
        <Outlet />
      </div>
      {!hiddenFooter && <Footer/>}
    </div>
  );
};

export default Main;
