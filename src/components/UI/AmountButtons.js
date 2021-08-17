import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import classes from "./AmountButtons.module.css";

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

export default AmountButtons;
