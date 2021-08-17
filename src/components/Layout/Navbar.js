import React from "react";
import { useDispatch } from "react-redux";
import { sidebarActions } from "../../store/sidebar-slice";
import logo from "../../assets/logo.svg";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links } from "../../utils/constants";
import CartButtons from "../Cart/CartButtons";
import classes from "./Navbar.module.css";
import { useAuth0 } from "@auth0/auth0-react";

const Nav = () => {
  const { user } = useAuth0();
  const dispatch = useDispatch();
  const toggleSidebar = () => {
    dispatch(sidebarActions.toggleSidebar());
  };
  return (
    <nav className={classes.nav}>
      <div className={classes["nav-center"]}>
        <div className={classes["nav-header"]}>
          <Link to="/">
            <img src={logo} alt="comfy sloth" />
          </Link>
          <button type="button" className={classes["nav-toggle"]}>
            <FaBars onClick={toggleSidebar} />
          </button>
        </div>
        <ul className={classes["nav-links"]}>
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
          {user && (
            <li>
              <Link to="/checkout">checkout</Link>
            </li>
          )}
        </ul>
        <CartButtons className={classes["cart-btn-wrapper"]} />
      </div>
    </nav>
  );
};

export default Nav;
