import React from "react";
import { Link } from "react-router-dom";
import CartColumns from "./CartColumns";
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";
import classes from "./CartContent.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const CartContent = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const clearShoppingCart = () => {
    dispatch(cartActions.clearCart());
  };

  return (
    <section className="section section-center">
      <CartColumns />
      {cart.map((product) => {
        return <CartItem key={product.id} {...product} />;
      })}
      <hr />
      <div className={classes["link-container"]}>
        <Link to="/products" className={classes["link-btn"]}>
          continue shopping
        </Link>
        <button
          type="button"
          className={`${classes["link-btn"]} ${classes["clear-btn"]}`}
          onClick={clearShoppingCart}
        >
          clear shopping cart
        </button>
      </div>
      <CartTotals />
    </section>
  );
};
// const Wrapper = styled.section`
//   .link-container {
//     display: flex;
//     justify-content: space-between;
//     margin-top: 2rem;
//   }
//   .link-btn {
//     background: transparent;
//     border-color: transparent;
//     text-transform: capitalize;
//     padding: 0.25rem 0.5rem;
//     background: var(--clr-primary-5);
//     color: var(--clr-white);
//     border-radius: var(--radius);
//     letter-spacing: var(--spacing);
//     font-weight: 400;
//     cursor: pointer;
//   }
//   .clear-btn {
//     background: var(--clr-black);
//   }
// `;
export default CartContent;
