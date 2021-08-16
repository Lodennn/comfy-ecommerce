import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart-slice";
import classes from "./CartPage.module.css";
import PageHero from "../components/Layout/PageHero";
import CartContent from "../components/Cart/CartContent";

const CartPage = () => {
  const { cart } = useSelector((state) => state.cart);

  if (cart.length < 1) {
    return (
      <main className="page-100">
        <div className={classes.empty}>
          <h2>Your cart is empty</h2>
          <Link to="/products" className="btn">
            Fill it
          </Link>
        </div>
      </main>
    );
  }
  return (
    <main>
      <PageHero title="cart" />
      <div className="page">
        <CartContent />
      </div>
    </main>
  );
};

// const Wrapper = styled.main`
//   .empty {
//     text-align: center;
//     h2 {
//       margin-bottom: 1rem;
//       text-transform: none;
//     }
//   }
// `;

export default CartPage;
