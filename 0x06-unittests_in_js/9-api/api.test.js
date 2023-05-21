const request = require('request');
const chai = require('chai');

const { expect } = chai;

describe('index page', () => {
  it('tests the / endpoint', function (done) {
    request('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('cart endpoint', () => {
  it('tests the cart/id endpoint with a valid id', function (done) {
    request('http://localhost:7865/cart/1759', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 1759');
      done();
    });
  });
  it('tests the card/id endpoint with an invalid id', function (done) {
    request('http://localhost:7865/cart/userID', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      expect(body).to.not.equal('Payment methods for cart userID');
      done();
    });
  });
});
