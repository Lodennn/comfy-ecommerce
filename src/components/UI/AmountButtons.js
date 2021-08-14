import React from "react";
import styled from "styled-components";
import { FaPlus, FaMinus } from "react-icons/fa";
import classes from "./AmountButton.module.css";

const AmountButtons = (props) => {
  return (
    <div className={classes["amount-btn"]}>
      <button
        type="button"
        className={classes["amount-btn"]}
        onClick={props.decrease}
      >
        <FaMinus />
      </button>
      <h2 className="amount">{props.amount}</h2>
      <button
        type="button"
        className={classes["amount-btn"]}
        onClick={props.increase}
      >
        <FaPlus />
      </button>
    </div>
  );
};

// const Wrapper = styled.div`
//   display: grid;
//   width: 140px;
//   justify-items: center;
//   grid-template-columns: repeat(3, 1fr);
//   align-items: center;
//   h2 {
//     margin-bottom: 0;
//   }
//   button {
//     background: transparent;
//     border-color: transparent;
//     cursor: pointer;
//     padding: 1rem 0;
//     width: 2rem;
//     height: 1rem;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
//   h2 {
//     margin-bottom: 0;
//   }
// `

export default AmountButtons;
