import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { sidebarActions } from "../../store/sidebar";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { links } from "../../utils/constants";
import CartButtons from "../Cart/CartButtons";
import classes from "./Sidebar.module.css";

const Sidebar = () => {
  const isSidebarOpen = useSelector((state) => state.sidebar);

  const dispatch = useDispatch();
  const asideClasses = [
    `${classes.sidebar}`,
    isSidebarOpen ? `${classes["show-sidebar"]}` : "",
  ].join(" ");

  const closeSidebar = () => {
    dispatch(sidebarActions.toggleSidebar());
  };

  return (
    <div className={classes["sidebar-wrapper"]}>
      <aside className={asideClasses}>
        <div className={classes["sidebar-header"]}>
          <img src={logo} className={classes.logo} alt="comfy sloth" />
          <button className={classes["close-btn"]} type="button">
            <FaTimes onClick={closeSidebar} />
          </button>
        </div>
        <ul className={classes.links}>
          {links.map(({ id, text, url }) => (
            <li key={id}>
              <Link to={url} onClick={closeSidebar}>
                {text}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/checkout" onClick={closeSidebar}>
              checkout
            </Link>
          </li>
        </ul>
        <CartButtons />
      </aside>
    </div>
  );
};

export default Sidebar;
