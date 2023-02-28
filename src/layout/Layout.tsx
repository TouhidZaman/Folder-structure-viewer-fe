import React, { Children } from "react";
import { Toaster } from "react-hot-toast";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";

type LProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LProps) => {
  return (
    <>
      <Navbar />
      <div style={{ minHeight: "83vh" }}>{children}</div>
      <Footer />
      <Toaster />
    </>
  );
};

export default Layout;
