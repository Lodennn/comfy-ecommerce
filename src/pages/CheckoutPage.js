import React from "react";
import { useSelector } from "react-redux";
import StripeCheckout from "../components/Checkout/StripeCheckout";
import PageHero from "../components/Layout/PageHero";
import { Link } from "react-router-dom";
import classes from "./CheckoutPage.module.css";

const CheckoutPage = () => {
  const { cart } = useSelector((state) => state.cart);
  return (
    <main>
      <PageHero title="checkout" />
      <div className={`page ${classes["checkout-page"]} `}>
        {cart.length < 1 ? (
          <div className={classes.empty}>
            <h2>your cart is empty</h2>
            <Link to="/products" className="btn">
              fill it
            </Link>
          </div>
        ) : (
          <StripeCheckout />
        )}
      </div>
    </main>
  );
};
export default CheckoutPage;
