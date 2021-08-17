import React from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { filterActions } from "../../store/filter-slice";
import FormSelect from "./FormSelect";
import classes from "./Sort.module.css";

const Sort = () => {
  const dispatch = useDispatch();
  const toggleProductsView = () => {
    dispatch(filterActions.toggleView());
  };
  const { filteredProducts, gridView } = useSelector((state) => state.filter);
  return (
    <section className={classes.sort}>
      <div className={classes["btn-container"]}>
        <button
          onClick={toggleProductsView}
          type="button"
          className={`${!gridView ? classes.active : null}`}
        >
          <BsFillGridFill />
        </button>
        <button
          onClick={toggleProductsView}
          type="button"
          className={`${gridView ? classes.active : null}`}
        >
          <BsList />
        </button>
      </div>
      <p>{filteredProducts.length} products found</p>
      <hr />
      <FormSelect products={filteredProducts} />
    </section>
  );
};

export default Sort;
