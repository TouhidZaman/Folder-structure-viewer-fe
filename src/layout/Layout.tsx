import React, { Children } from "react";
import { Toaster } from "react-hot-toast";
import Navbar from "./navbar/Navbar";

type LProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LProps) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Toaster />
    </>
  );
};

export default Layout;
