import React from "react";
import { formatPrice } from "../../utils/helpers";
import AmountButtons from "../UI/AmountButtons";
import { FaTrash } from "react-icons/fa";
import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const CartItem = (props) => {
  const { id, name, image, price, color, amount } = props;

  const dispatch = useDispatch();

  const increase = () => {
    dispatch(cartActions.toggleCartAmount({ id: id, type: "inc" }));
  };

  const decrease = () => {
    dispatch(cartActions.toggleCartAmount({ id: id, type: "dec" }));
  };

  const removeProductFromCart = (id) => {
    dispatch(cartActions.removeFromCart(id));
  };

  return (
    <article className={classes["cart-item"]}>
      <div className={classes.title}>
        <img src={image} alt={name} />
        <div>
          <h5 className={classes.name}>{name}</h5>
          <p className={classes.color}>
            color : <span style={{ background: color }}></span>
          </p>
          <h5 className={classes["price-small"]}>{formatPrice(price)}</h5>
        </div>
      </div>
      <h5 className={classes.price}>{formatPrice(price)}</h5>
      <AmountButtons amount={amount} increase={increase} decrease={decrease} />
      <h5 className={classes.subtotal}>{formatPrice(price * amount)}</h5>
      <button
        type="button"
        className={classes["remove-btn"]}
        onClick={removeProductFromCart.bind(null, id)}
      >
        <FaTrash />
      </button>
    </article>
  );
};

export default CartItem;
