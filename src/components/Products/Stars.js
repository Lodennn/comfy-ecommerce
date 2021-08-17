import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import classes from "./Stars.module.css";
const Stars = (props) => {
  const starsGenerator = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index}>
        {props.stars >= index + 1 ? (
          <BsStarFill />
        ) : props.stars > number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });
  return (
    <div className={classes.stars}>
      <div>{starsGenerator}</div>
      <p className="reviews">({props.reviews} customer reviews)</p>
    </div>
  );
};

export default Stars;
