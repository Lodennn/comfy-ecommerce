import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";
import { fetchSingleProductData } from "../store/singleProduct-slice";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/UI/Loading";
import Error from "../components/UI/Error";
import PageHero from "../components/Layout/PageHero";
import ProductImages from "../components/Products/ProductImages";
import Stars from "../components/Products/Stars";
import AddToCart from "../components/Cart/AddToCart";
import classes from "./SingleProductPage.module.css";

const SingleProductPage = () => {
  const { productId } = useParams();

  const history = useHistory();

  const dispatch = useDispatch();

  const {
    product,
    httpData: { isLoading, error },
  } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchSingleProductData(productId));
  }, [productId, dispatch]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push("/");
      }, 3000);
    }
  }, [error, history]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <main>
      <PageHero title={product.name} product />
      <div className="section section-center page">
        <Link to="/products" className="btn">
          back to products
        </Link>
        <div className={classes["product-center"]}>
          {product.images && <ProductImages images={product.images} />}

          <section className="content">
            <h2>{product.name}</h2>
            <Stars stars={product.stars} reviews={product.reviews} />
            <h5 className={classes.price}>{formatPrice(product.price)}</h5>
            <p className={classes.desc}>{product.description}</p>
            <p className={classes.info}>
              <span>Available : </span>
              {product.stock > 0 ? "In stock" : "out of stock"}
            </p>
            <p className={classes.info}>
              <span>SKU : </span>
              {product.id}
            </p>
            <p className={classes.info}>
              <span>Brand : </span>
              {product.company}
            </p>
            <hr />
            {product.stock > 0 && <AddToCart product={product} />}
          </section>
        </div>
      </div>
    </main>
  );
};

export default SingleProductPage;
