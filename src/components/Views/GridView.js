import React from "react";
import Product from "../Products/Product";
import classes from "./GridView.module.css";

const GridView = (props) => {
  return (
    <section>
      <div className={classes["products-container"]}>
        {props.products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </section>
  );
};

export default GridView;
