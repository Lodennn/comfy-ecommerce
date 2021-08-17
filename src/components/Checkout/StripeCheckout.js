import React, { useState, useEffect, useCallback } from "react";
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
import classes from "./StripeCheckout.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { cartActions } from "../../store/cart-slice";

const stripePromise = loadStripe(
  "pk_test_51JPUK3AeGHYL55mWUe8TTX8M4vb5czajKhdZ77wgrzD3Uc9LEwCw6O4PtiaBwf3ckOVqNoz7hQTbcbpecD7m4lTH00aIqrgVWA"
);

const CheckoutForm = () => {
  const { cart, shippingFee, totalAmount } = useSelector((state) => state.cart);
  const { user } = useAuth0();
  const dispatch = useDispatch();
  const history = useHistory();

  // STRIPE STUFF
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  const createPaymentIntent = useCallback(async () => {
    try {
      const { data } = await axios.post(
        "https://comfyecommerce.netlify.app/.netlify/functions/create-payment-intent",
        JSON.stringify({ cart, shippingFee, totalAmount })
      );
      console.log(data);
      setClientSecret(data.clientSecret);
    } catch (error) {
      console.error("🥵🤬😡", error.message);
    }
  }, [cart, shippingFee, totalAmount]);

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads

    createPaymentIntent();
  }, [createPaymentIntent]);

  const cardElementOptions = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  const handleChange = async (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();
    setProcessing(true);

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
      setTimeout(() => {
        dispatch(cartActions.clearCart());
        history.push("/");
      }, 10000);
    }
  };

  return (
    <div>
      {succeeded ? (
        <article>
          <h4>Thank you</h4>
          <h4>Your payment was successful!</h4>
          <h4>Redirecting to home page shortly</h4>
        </article>
      ) : (
        <article>
          <h4>Hello, {user?.name}</h4>
          <p>Your total is {formatPrice(shippingFee + totalAmount)}</p>
          <p>Test Card Number : 4242 4242 4242 4242</p>
        </article>
      )}
      <form
        id="payment-form"
        onSubmit={handleSubmit}
        className={classes["stripe-form"]}
      >
        <CardElement
          id="cart-element"
          options={cardElementOptions}
          onChange={handleChange}
        />
        <button disabled={processing || disabled || succeeded} id="submit">
          <span id="button-text">
            {processing ? (
              <div className={classes.spinner} id="spinnier"></div>
            ) : (
              "Pay"
            )}
          </span>
        </button>
        {/* Show any error that happens when processing the payment */}
        {error && (
          <div className={classes["card-error"]} role="alert">
            {error}
          </div>
        )}
        {/* Show  a success message upon completion */}
        <p
          className={
            succeeded
              ? classes["result-message"]
              : `${classes["result-message"]} ${classes.hidden}`
          }
        >
          Payment succedded, see the result in your
          <a href={`https://dashboard.stripe.com/test/payments`}>
            Stripe dasboard.
          </a>
          Refresh the page to pay again
        </p>
      </form>
    </div>
  );
};

const StripeCheckout = () => {
  return (
    <section>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </section>
  );
};

export default StripeCheckout;
