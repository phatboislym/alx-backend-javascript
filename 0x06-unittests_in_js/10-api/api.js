const express = require('express');

const app = express();
app.use(express.json());
const port = 7865;

app.get('/', (request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (request, response) => {
  const { id } = request.params;
  if (Number.isNaN(id)) {
    response.statusCode = 404;
    response.send('id is NOT a number');
  } else {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.send(`Payment methods for cart ${id}`);
  }
});

app.get('/available_payments', (request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.send({
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  });
});

app.post('/login', (request, response) => {
  const username = request.body.userName;
  if (username) {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.send(`Welcome ${username}`);
  } else {
    response.statusCode = 400;
    response.setHeader('Content-Type', 'text/plain');
    response.send('Bad request');
  }
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});
