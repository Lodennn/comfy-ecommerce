import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  useStripe,
  Elements,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { formatPrice } from "../../utils/helpers";
import { useHistory } from "react-router-dom";

const CheckoutForm = () => {
  return <h2>Checkout Form</h2>;
};

const StripeCheckout = () => {
  return <h1>Stripe Checkout</h1>;
};

export default StripeCheckout;
