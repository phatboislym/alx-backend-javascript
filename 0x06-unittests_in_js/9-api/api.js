const express = require('express');

const app = express();
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

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});
