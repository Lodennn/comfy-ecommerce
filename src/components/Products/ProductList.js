import React, { useEffect, Fragment } from "react";
import GridView from "../Views/GridView";
import ListView from "../Views/ListView";
import { useSelector, useDispatch } from "react-redux";
import { filterActions } from "../../store/filter-slice";

const ProductList = () => {
  const { filteredProducts, gridView } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  console.log(filteredProducts);

  if (filteredProducts.length <= 0) {
    return <h4>Sorry, no products matched your search</h4>;
  }

  const toggleProductsView = () => {
    dispatch(filterActions.toggleView());
  };

  return (
    <Fragment>
      <button onClick={toggleProductsView}>Change</button>
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
