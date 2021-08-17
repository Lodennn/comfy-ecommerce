import React from "react";
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

export default PageHero;
