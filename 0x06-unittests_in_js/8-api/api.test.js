const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./api');

chai.use(chaiHttp);
const { expect } = chai;

describe('index Page', () => {
  it('should return status code 200', () => new Promise((done) => {
    chai.request(app)
      .get('/')
      .end((error, response) => {
        expect(response).to.have.status(200);
        done();
      });
  }));

  it('should return the correct result', () => new Promise((done) => {
    chai.request(app)
      .get('/')
      .end((error, response) => {
        expect(response.text).to.equal('Welcome to the payment system');
        done();
      });
  }));
});
