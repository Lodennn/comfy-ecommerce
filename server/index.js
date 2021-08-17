const express = require("express");
const app = express();
// This is your real test secret API key.
const stripe = require("stripe")(
  "sk_test_51JPUK3AeGHYL55mWBIPRlDmzTGQBaOEG4ZDMhd7hsSqFbznpTktS0W8jU7yjbtMVjyPl1xMoBzglDkegHFfVne2800evFBIH3w"
);

app.use(express.static("public"));
app.use(express.json());

const calculateOrderAmount = (amount) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return amount;
};

app.post("/create-payment-intent", async (req, res) => {
  const { totalAmount, shippingFee } = req.body;
  console.log(req.body);
  try {
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: totalAmount,
      currency: "usd",
      confirm: true,
    });
    console.log("payment", paymentIntent);
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (err) {
    console.log(err.message);
  }
});

app.listen(4000, () => console.log("Node server listening on port 4000!"));
