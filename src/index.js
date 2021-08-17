import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/index";

ReactDOM.render(
  <Auth0Provider
    domain="dev-mgzl1auu.us.auth0.com"
    clientId="68nBtqadh13Qtt42FMNfbs7DpFI0oqHH"
    redirectUri={window.location.origin}
  >
    <Provider store={store}>
      <App />
    </Provider>
  </Auth0Provider>,
  document.getElementById("root")
);
