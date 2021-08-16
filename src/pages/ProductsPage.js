import React from "react";
import PageHero from "../components/Layout/PageHero";
import ProductList from "../components/Products/ProductList";
import Filters from "../components/Products/Filters";
import Sort from "../components/Products/Sort";
import classes from "./ProductsPage.module.css";

const ProductsPage = () => {
  return (
    <main>
      <PageHero title="products" />
      <div className="page">
        <div className={`section section-center ${classes.products}`}>
          <Filters />
          <div>
            <Sort />
            <ProductList />
          </div>
        </div>
      </div>
    </main>
  );
};

// const Wrapper = styled.div`
//   .products {
//     display: grid;
//     gap: 3rem 1.5rem;
//     margin: 4rem auto;
//   }
//   @media (min-width: 768px) {
//     .products {
//       grid-template-columns: 200px 1fr;
//     }
//   }
// `

export default ProductsPage;
