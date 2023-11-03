import React from "react";
import { Outlet } from "react-router-dom";
import Nvaber from "../../pages/home/Nvaber";
import Footer from "../../pages/home/Footer";
import Nav_Sitebar from "../../pages/home/Nav_Sitebar";

const Main_layout = () => {
  return (
    <div>
      <Nvaber />
      <Outlet />
      <Nav_Sitebar />
      <Footer />
    </div>
  );
};

export default Main_layout;
