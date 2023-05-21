const request = require('request');
const chai = require('chai');

const { expect } = chai;

describe('index page', () => {
  it('tests the / endpoint', () => new Promise((done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  }));
});

describe('cart endpoint', () => {
  it('tests the cart/id endpoint with a valid id', () => new Promise((done) => {
    request('http://localhost:7865/cart/1759', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 1759');
      done();
    });
  }));
  it('tests the card/id endpoint with an invalid id', () => new Promise((done) => {
    request('http://localhost:7865/cart/userID', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      expect(body).to.not.equal('Payment methods for cart userID');
      done();
    });
  }));
});

describe('available payments endpoint', () => {
  it('tests the available payments endpoint', () => new Promise((done) => {
    request('http://localhost:7865/available_payments', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(JSON.parse(body)).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false,
        },
      });
      done();
    });
  }));
});

describe('login endpoint', () => {
  it('tests the login endpoint with a valid username', () => new Promise((done) => {
    request.post({
      url: 'http://localhost:7865/login',
      json: { userName: 'Brendan' },
    }, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome Brendan');
      done();
    });
  }));
  it('tests the login endpoint with no username', () => new Promise((done) => {
    request.post({
      url: 'http://localhost:7865/login',
      json: { userName: '' },
    }, (error, response, body) => {
      expect(response.statusCode).to.equal(400);
      expect(body).to.equal('Bad request');
      done();
    });
  }));
});
