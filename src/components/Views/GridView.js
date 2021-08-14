import React from "react";
import styled from "styled-components";
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

// const Wrapper = styled.section`
//   img {
//     height: 175px;
//   }

//   .products-container {
//     display: grid;
//     gap: 2rem 1.5rem;
//   }

//   @media (min-width: 992px) {
//     .products-container {
//       grid-template-columns: repeat(2, 1fr);
//     }
//   }
//   @media (min-width: 1170px) {
//     .products-container {
//       grid-template-columns: repeat(3, 1fr);
//     }
//   }
// `;

export default GridView;
