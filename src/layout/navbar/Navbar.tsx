import React from "react";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.logo}>
        <span className="material-symbols-outlined">folder_open</span>
        Folder Viewer
      </div>
      <ul className={classes.navItems}>
        <li>Home</li>
        <li>About</li>
      </ul>
    </nav>
  );
};

export default Navbar;
