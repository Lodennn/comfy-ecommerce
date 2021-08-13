import React, { Fragment, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
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
import FeaturedProducts from "./components/Products/FeaturedProducts";

function App() {
  return (
    <Fragment>
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
          <CheckoutPage />
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
    </Fragment>
  );
}

export default App;
