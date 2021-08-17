import React from "react";
import { formatPrice } from "../../utils/helpers";
import { Link } from "react-router-dom";
import classes from "./ListView.module.css";

const ListView = (props) => {
  return (
    <section className={classes["list-view"]}>
      {props.products.map((product) => {
        const { id, image, name, price, description } = product;
        return (
          <article key={id}>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <h5 className={classes.price}>{formatPrice(price)}</h5>
              <p>{description.substring(0, 150)}...</p>
              <Link to={`/products/${id}`} className="btn">
                Details
              </Link>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default ListView;
