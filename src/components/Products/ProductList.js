import React from "react";
import { useFilterContext } from "../../context/filter_context";
import GridView from "../UI/GridView";
import ListView from "../UI/ListView";
import { useSelector, useDispatch } from "react-redux";

const ProductList = () => {
  const productsList = useSelector((state) => state.products);
  console.log(productsList);
  return <h4>product list</h4>;
};

export default ProductList;
