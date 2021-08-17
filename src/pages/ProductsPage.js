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

export default ProductsPage;
