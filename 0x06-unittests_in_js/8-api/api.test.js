const request = require('request');
const chai = require('chai');

const { expect } = chai;

describe('call the index route /', () => {
  it('GET /', () => function (done) {
    request('http://localhost:7865/', (error, response, body) => {
      expect(response).to.have.status(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
