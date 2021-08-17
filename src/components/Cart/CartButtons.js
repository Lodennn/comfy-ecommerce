import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sidebarActions } from "../../store/sidebar";
import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import classes from "./CartButtons.module.css";
import { useAuth0 } from "@auth0/auth0-react";

const CartButtons = (props) => {
  const { user, loginWithRedirect, logout } = useAuth0();

  const { totalItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const closeSidebar = () => {
    dispatch(sidebarActions.toggleSidebar());
  };
  return (
    <div className={`${classes["cart-buttons"]} ${props.className}`}>
      <Link to="/cart" className={classes["cart-btn"]} onClick={closeSidebar}>
        Cart
        <span className={classes["cart-container"]}>
          <FaShoppingCart />
          <span className={classes["cart-value"]}>{totalItems}</span>
        </span>
      </Link>

      {!user && (
        <button
          type="button"
          className={classes["auth-btn"]}
          onClick={loginWithRedirect}
        >
          Login <FaUserPlus />
        </button>
      )}
      {user && (
        <button
          type="button"
          className={classes["auth-btn"]}
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          Logout <FaUserMinus />
        </button>
      )}
    </div>
  );
};

export default CartButtons;
