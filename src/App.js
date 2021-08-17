import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Sidebar from "./components/Layout/Sidebar";
import Footer from "./components/Layout/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ProductsPage from "./pages/ProductsPage";
import SingleProductPage from "./pages/SingleProductPage";
import ErrorPage from "./pages/ErrorPage";
import { filterActions } from "./store/filter-slice";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductsData } from "./store/products-slice";
import { cartActions } from "./store/cart-slice";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { user } = useAuth0();
  const { sort, filteredProducts, filters } = useSelector(
    (state) => state.filter
  );
  const { cart } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cartActions.calculateCartTotalItems());
    dispatch(cartActions.persistLocalStorage(cart));
  }, [cart, dispatch]);

  useEffect(() => {
    dispatch(fetchProductsData());
  }, [dispatch]);

  useEffect(() => {
    dispatch(filterActions.loadFilters());
    dispatch(filterActions.sortBy(sort));
  }, [filteredProducts, sort, filters, dispatch]);

  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/cart">
          <CartPage />
        </Route>
        <Route path="/checkout">
          {user && <CheckoutPage />}
          {!user && <Redirect to="/" />}
        </Route>
        <Route path="/products" exact>
          <ProductsPage />
        </Route>
        <Route path="/products/:productId">
          <SingleProductPage />
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
