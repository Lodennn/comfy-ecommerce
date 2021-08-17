import React from "react";
import StripeCheckout from "../components/Checkout/StripeCheckout";
import PageHero from "../components/Layout/PageHero";

const CheckoutPage = () => {
  return (
    <main>
      <PageHero title="checkout" />
      <div className="page">
        <StripeCheckout />
      </div>
    </main>
  );
};
export default CheckoutPage;
