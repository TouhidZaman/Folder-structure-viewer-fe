import React, { Children } from "react";
import Navbar from "./navbar/Navbar";

type LProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LProps) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
};

export default Layout;
