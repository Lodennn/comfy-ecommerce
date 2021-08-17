import React from "react";
import Error from "../UI/Error";
import Loading from "../UI/Loading";
import Product from "./Product";
import { useSelector } from "react-redux";
import classes from "./FeaturedProducts.module.css";

const FeaturedProducts = () => {
  const {
    featuredProducts,
    httpData: { isLoading, error },
  } = useSelector((state) => state.products);

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <section className={`section ${classes["featured-product"]}`}>
      <div className="title">
        <h2>featured products</h2>
        <div className="underline"></div>
      </div>
      <div className={`section-center ${classes.featured}`}>
        {featuredProducts.slice(0, 3).map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </section>
  );
};

export default FeaturedProducts;
