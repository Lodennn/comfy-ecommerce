import React, { useState } from "react";
import { useFilterContext } from "../../context/filter_context";
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
    let name = e.target.name;
    let value = e.target.value;

    if (name === "category") {
      value = e.target.textContent;
    }
    if (name === "color") {
      value = e.target.dataset.color;
    }
    dispatch(
      filterActions.updateFilters({
        name: e.target.name,
        value,
      })
    );
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
        </form>
      </div>
    </section>
  );
};

// const Wrapper = styled.section`
//   .form-control {
//     margin-bottom: 1.25rem;
//     h5 {
//       margin-bottom: 0.5rem;
//     }
//   }
//   .search-input {
//     padding: 0.5rem;
//     background: var(--clr-grey-10);
//     border-radius: var(--radius);
//     border-color: transparent;
//     letter-spacing: var(--spacing);
//   }
//   .search-input::placeholder {
//     text-transform: capitalize;
//   }

//   button {
//     display: block;
//     margin: 0.25em 0;
//     padding: 0.25rem 0;
//     text-transform: capitalize;
//     background: transparent;
//     border: none;
//     border-bottom: 1px solid transparent;
//     letter-spacing: var(--spacing);
//     color: var(--clr-grey-5);
//     cursor: pointer;
//   }
//   .active {
//     border-color: var(--clr-grey-5);
//   }
//   .company {
//     background: var(--clr-grey-10);
//     border-radius: var(--radius);
//     border-color: transparent;
//     padding: 0.25rem;
//   }
//   .colors {
//     display: flex;
//     align-items: center;
//   }
//   .color-btn {
//     display: inline-block;
//     width: 1rem;
//     height: 1rem;
//     border-radius: 50%;
//     background: #222;
//     margin-right: 0.5rem;
//     border: none;
//     cursor: pointer;
//     opacity: 0.5;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     svg {
//       font-size: 0.5rem;
//       color: var(--clr-white);
//     }
//   }
//   .all-btn {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     margin-right: 0.5rem;
//     opacity: 0.5;
//   }
//   .active {
//     opacity: 1;
//   }
//   .all-btn .active {
//     text-decoration: underline;
//   }
//   .price {
//     margin-bottom: 0.25rem;
//   }
//   .shipping {
//     display: grid;
//     grid-template-columns: auto 1fr;
//     align-items: center;
//     text-transform: capitalize;
//     column-gap: 0.5rem;
//     font-size: 1rem;
//   }
//   .clear-btn {
//     background: var(--clr-red-dark);
//     color: var(--clr-white);
//     padding: 0.25rem 0.5rem;
//     border-radius: var(--radius);
//   }
//   @media (min-width: 768px) {
//     .content {
//       position: sticky;
//       top: 1rem;
//     }
//   }
// `;

export default Filters;
