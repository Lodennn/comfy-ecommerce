import React from "react";
import { useDispatch } from "react-redux";
import { filterActions } from "../../store/filter-slice";
import classes from "./FormSelect.module.css";

const FormSelect = (props) => {
  const dispatch = useDispatch();
  const onSelectChange = (e) => {
    e.preventDefault();
    dispatch(filterActions.sortBy(e.target.value));
  };
  return (
    <form onChange={onSelectChange}>
      <label htmlFor="sort">Sort By</label>
      <select name="sort" id="sort" className={classes["sort-input"]}>
        <option value="price-lowest">price (lowest)</option>
        <option value="price-highest">price (highest)</option>
        <option value="name-a">name (a-z)</option>
        <option value="name-z">name (z-a)</option>
      </select>
    </form>
  );
};

export default FormSelect;
