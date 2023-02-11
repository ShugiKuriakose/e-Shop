import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <NavLink className={styles.nav_link} to="/">
        Home
      </NavLink>
      <NavLink className={styles.nav_link} to="/Products">
        Products
      </NavLink>
      <NavLink className={styles.nav_link} to="/Cart">
        Cart
      </NavLink>
    </nav>
  );
};

export default NavBar;
