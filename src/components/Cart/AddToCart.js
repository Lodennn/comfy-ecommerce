import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import AmountButtons from "../UI/AmountButtons";
import classes from "./AddToCart.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const AddToCart = (props) => {
  const dispatch = useDispatch();
  const { id, stock, colors } = props.product;

  const [mainColor, setMainColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const addActiveClassToColor = (color) => {
    setMainColor(color);
  };

  const increase = () => {
    setAmount((state) => {
      if (state >= stock) return state;
      return state + 1;
    });
  };

  const decrease = () => {
    setAmount((state) => {
      if (state === 1) return state;
      return state - 1;
    });
  };

  const addProductToCart = () => {
    dispatch(
      cartActions.addToCart({
        id: id,
        color: mainColor,
        amount: amount,
        product: props.product,
      })
    );
  };

  return (
    <section className={classes["add-to-cart"]}>
      <div className={classes.colors}>
        <span> colors : </span>
        <div>
          {colors.map((color, index) => {
            return (
              <button
                key={index}
                className={`${classes["color-btn"]} ${
                  color === mainColor ? classes.active : null
                }`}
                style={{ background: color }}
                onClick={addActiveClassToColor.bind(null, color)}
              >
                {color === mainColor ? <FaCheck /> : null}
              </button>
            );
          })}
        </div>
      </div>
      <div className={`btn-container ${classes["btn-container"]}`}>
        <AmountButtons
          amount={amount}
          increase={increase}
          decrease={decrease}
        />
        <Link
          to="/cart"
          className={`btn ${classes.btn}`}
          onClick={addProductToCart}
        >
          Add to cart
        </Link>
      </div>
    </section>
  );
};

export default AddToCart;
