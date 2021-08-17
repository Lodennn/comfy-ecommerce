import React from "react";
import { formatPrice } from "../../utils/helpers";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import classes from "./Product.module.css";

const Product = (props) => {
  return (
    <article>
      <div className={classes.container}>
        <img src={props.image} alt={props.name} />
        <Link to={`/products/${props.id}`} className={classes.link}>
          <FaSearch />
        </Link>
      </div>
      <footer>
        <h5>{props.name}</h5>
        <p>{formatPrice(props.price)}</p>
      </footer>
    </article>
  );
};

export default Product;
