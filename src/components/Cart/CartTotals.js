import React from "react";
import { formatPrice } from "../../utils/helpers";
import { Link } from "react-router-dom";
import classes from "./CartTotals.module.css";
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";

const CartTotals = () => {
  const { user, loginWithRedirect } = useAuth0();
  const { totalAmount, shippingFee } = useSelector((state) => state.cart);
  return (
    <section className={classes["cart-total"]}>
      <article>
        <h5>
          subtotal: <span>{formatPrice(totalAmount)}</span>
        </h5>
        <p>
          shipping fee : <span>{formatPrice(shippingFee)}</span>
        </p>
        <hr />
        <h4>
          order total: <span>{formatPrice(totalAmount + shippingFee)}</span>
        </h4>
      </article>
      {user && (
        <Link to="/checkout" className={`btn ${classes.btn}`}>
          procced to checkout
        </Link>
      )}
      {!user && (
        <button
          type="button"
          className={`btn ${classes.btn}`}
          onClick={loginWithRedirect}
        >
          login
        </button>
      )}
    </section>
  );
};

export default CartTotals;
