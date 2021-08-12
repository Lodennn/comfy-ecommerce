import React from "react";
import { Link } from "react-router-dom";
import classes from "./ErrorPage.module.css";
const ErrorPage = () => {
  return (
    <main className={`${"page-100"} ${classes["error-page"]}`}>
      <section>
        <h1>404</h1>
        <h3>Sorry, the page you tried cannot be found</h3>
        <Link to="/" className="btn">
          back home
        </Link>
      </section>
    </main>
  );
};

export default ErrorPage;
