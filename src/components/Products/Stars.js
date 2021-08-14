import React from "react";
import styled from "styled-components";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { GiClawSlashes } from "react-icons/gi";
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

// const Wrapper = styled.div`
//   display: flex;
//   align-items: center;
//   span {
//     color: #ffb900;
//     font-size: 1rem;
//     margin-right: 0.25rem;
//   }
//   p {
//     margin-left: 0.5rem;
//     margin-bottom: 0;
//   }
//   margin-bottom: 0.5rem;
// `
export default Stars;
