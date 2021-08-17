import React from "react";
import { getUniqueValues, formatPrice } from "../../utils/helpers";
import { FaCheck } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { filterActions } from "../../store/filter-slice";
import classes from "./Filters.module.css";

const Filters = () => {
  const dispatch = useDispatch();
  const {
    filters: {
      text,
      company,
      category,
      color,
      minPrice,
      maxPrice,
      price,
      shipping,
    },
    allProducts,
  } = useSelector((state) => state.filter);

  const updateFiltersValue = (e) => {
    let { name, value } = e.target;

    if (name === "category") {
      value = e.target.textContent;
    }
    if (name === "color") {
      value = e.target.dataset.color;
    }
    if (name === "price") {
      value = +value;
    }
    if (name === "shipping") {
      console.log(e.target.dataset.checked);
      value = e.target.checked;
    }
    dispatch(
      filterActions.updateFilters({
        name: e.target.name,
        value,
      })
    );
    dispatch(filterActions.filterProducts());
  };

  const resetFilters = (e) => {
    dispatch(filterActions.clearFilters());
  };

  const categories = getUniqueValues(allProducts, "category");
  const companies = getUniqueValues(allProducts, "company");
  const [allColors, ...colors] = getUniqueValues(allProducts, "colors");

  return (
    <section>
      <div className={classes.content}>
        <form onSubmit={() => {}}>
          {/* search input */}
          <div className={classes["form-control"]}>
            <input
              type="text"
              name="text"
              placeholder="search"
              className={classes["search-input"]}
              value={text}
              onChange={updateFiltersValue}
            />
          </div>
          {/* search input */}

          {/* {categories} */}
          <div className={classes["form-control"]}>
            <h5>category</h5>
            <div>
              {categories.map((cat, index) => {
                return (
                  <button
                    key={index}
                    onClick={updateFiltersValue}
                    name="category"
                    type="button"
                    className={`${
                      cat === category.toLowerCase() ? classes.active : null
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
          {/* {categories} */}

          {/* {companies} */}
          <div className={classes["form-control"]}>
            <h5>company</h5>
            <select
              className={classes.company}
              name="company"
              value={company}
              onChange={updateFiltersValue}
            >
              {companies.map((comp, index) => {
                return (
                  <option key={index} value={comp}>
                    {comp}
                  </option>
                );
              })}
            </select>
          </div>
          {/* {companies} */}

          {/* {colors} */}
          <div className={classes["form-control"]}>
            <h5>color</h5>
            <div className={classes.colors}>
              <button
                type="button"
                name="color"
                data-color="all"
                className={`${classes["all-btn"]} ${
                  allColors === color ? classes.active : null
                }`}
                onClick={updateFiltersValue}
              >
                {allColors}
              </button>

              {colors.map((col, index) => {
                return (
                  <button
                    key={index}
                    className={`${classes["color-btn"]} ${
                      col === color ? classes.active : null
                    }`}
                    type="button"
                    name="color"
                    data-color={col}
                    style={{ backgroundColor: col }}
                    onClick={updateFiltersValue}
                  >
                    {col === color ? <FaCheck /> : null}
                  </button>
                );
              })}
            </div>
          </div>
          {/* {colors} */}

          {/* {price} */}
          <div className={classes["form-control"]}>
            <h5>price</h5>
            <p className={classes.price}>{formatPrice(price)}</p>
            <div>
              <input
                type="range"
                name="price"
                min={minPrice}
                max={maxPrice}
                value={price}
                onChange={updateFiltersValue}
              />
            </div>
          </div>
          {/* {price} */}

          {/* {shipping} */}
          <div className={`${classes["form-control"]} ${classes.shipping}`}>
            <label htmlFor="shipping">free shipping</label>
            <input
              type="checkbox"
              name="shipping"
              id="shipping"
              onChange={updateFiltersValue}
              checked={shipping}
            />
          </div>
          {/* {shipping} */}
        </form>
        <button
          type="button"
          className={classes["clear-btn"]}
          onClick={resetFilters}
        >
          clear filters
        </button>
      </div>
    </section>
  );
};

export default Filters;
