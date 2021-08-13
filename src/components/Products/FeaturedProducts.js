import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Error from "../UI/Error";
import Loading from "../UI/Loading";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsData } from "../../store/products-slice";
import classes from "./FeaturedProducts.module.css";

const FeaturedProducts = () => {
  const {
    featuredProducts,
    httpData: { isLoading, error },
  } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsData());
  }, [dispatch]);

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

// const Wrapper = styled.section`
//   background: var(--clr-grey-10);
//   .featured {
//     margin: 4rem auto;
//     display: grid;
//     gap: 2.5rem;
//     img {
//       height: 225px;
//     }
//   }
//   .btn {
//     display: block;
//     width: 148px;
//     margin: 0 auto;
//     text-align: center;
//   }
//   @media (min-width: 576px) {
//     .featured {
//       grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
//     }
//   }
// `;

export default FeaturedProducts;
