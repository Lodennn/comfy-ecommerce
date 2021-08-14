import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import classes from "./PageHero.module.css";
const PageHero = (props) => {
  return (
    <section className={classes["page-hero"]}>
      <div className="section-center">
        <h3>
          <Link to="/">Home</Link>/
          {props.product && <Link to="/products">Products /</Link>}
          {props.title}
        </h3>
      </div>
    </section>
  );
};

// const Wrapper = styled.section`
//   background: var(--clr-primary-10);
//   width: 100%;
//   min-height: 20vh;
//   display: flex;
//   align-items: center;

//   color: var(--clr-primary-1);
//   a {
//     color: var(--clr-primary-3);
//     padding: 0.5rem;
//     transition: var(--transition);
//   }
//   a:hover {
//     color: var(--clr-primary-1);
//   }
// `

export default PageHero;
