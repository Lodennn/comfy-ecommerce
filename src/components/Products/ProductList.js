import React, { useEffect, Fragment } from "react";
import GridView from "../Views/GridView";
import ListView from "../Views/ListView";
import { useSelector } from "react-redux";

const ProductList = () => {
  const { filteredProducts, gridView } = useSelector((state) => state.filter);

  console.log(filteredProducts);

  if (filteredProducts.length <= 0) {
    return <h4>Sorry, no products matched your search</h4>;
  }

  return (
    <Fragment>
      {!gridView && (
        <GridView products={filteredProducts}>Products List</GridView>
      )}
      {gridView && (
        <ListView products={filteredProducts}>Products List</ListView>
      )}
    </Fragment>
  );
};

export default ProductList;
