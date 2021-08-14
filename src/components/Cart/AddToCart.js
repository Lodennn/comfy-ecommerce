import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { useCartContext } from "../../context/cart_context";
import AmountButtons from "../UI/AmountButtons";
import classes from "./AddToCart.module.css";

const AddToCart = (props) => {
  const { id, stock, colors } = props.product;
  const [mainColor, setMainColor] = useState(colors[0]);
  const addActiveClassToColor = (color) => {
    setMainColor(color);
    console.log(mainColor);
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
    </section>
  );
};

// const Wrapper = styled.section`
//   margin-top: 2rem;
//   .colors {
//     display: grid;
//     grid-template-columns: 125px 1fr;
//     align-items: center;
//     margin-bottom: 1rem;
//     span {
//       text-transform: capitalize;
//       font-weight: 700;
//     }
//     div {
//       display: flex;
//     }
//   }
//   .color-btn {
//     display: inline-block;
//     width: 1.5rem;
//     height: 1.5rem;
//     border-radius: 50%;
//     background: #222;
//     margin-right: 0.5rem;
//     border: none;
//     cursor: pointer;
//     opacity: 0.5;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     svg {
//       font-size: 0.75rem;
//       color: var(--clr-white);
//     }
//   }
//   .active {
//     opacity: 1;
//   }
//   .btn-container {
//     margin-top: 2rem;
//   }

//   .btn {
//     margin-top: 1rem;
//     width: 140px;
//   }
// `;
export default AddToCart;
