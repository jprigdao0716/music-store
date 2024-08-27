const express = require('express');
const bodyParser = require('body-parser');
const paypal = require('paypal-rest-sdk');
const cors = require('cors');
const app = express();

// Configure PayPal
paypal.configure({
  mode: 'sandbox', // or 'live' for production
  client_id: 'YOUR_PAYPAL_CLIENT_ID',
  client_secret: 'YOUR_PAYPAL_CLIENT_SECRET'
});

app.use(bodyParser.json());
app.use(cors());

// Create a payment
app.post('/api/paypal/create-payment', (req, res) => {
  const { amount, currency, description } = req.body;

  const create_payment_json = {
    intent: 'sale',
    payer: {
      payment_method: 'paypal'
    },
    redirect_urls: {
      return_url: 'http://localhost:3000/success',
      cancel_url: 'http://localhost:3000/cancel'
    },
    transactions: [{
      item_list: {
        items: [{
          name: description,
          sku: '001',
          price: amount,
          currency: currency,
          quantity: 1
        }]
      },
      amount: {
        currency: currency,
        total: amount
      },
      description: description
    }]
  };

  paypal.payment.create(create_payment_json, (error, payment) => {
    if (error) {
      console.error(error);
      res.status(500).send(error);
    } else {
      res.json(payment);
    }
  });
});

// Execute payment
app.post('/api/paypal/execute-payment', (req, res) => {
  const { paymentId, payerId } = req.body;

  const execute_payment_json = {
    payer_id: payerId
  };

  paypal.payment.execute(paymentId, execute_payment_json, (error, payment) => {
    if (error) {
      console.error(error);
      res.status(500).send(error);
    } else {
      res.json(payment);
    }
  });
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
