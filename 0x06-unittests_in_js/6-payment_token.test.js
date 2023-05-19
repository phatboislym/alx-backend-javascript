const chai = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

const { expect } = chai;

describe('getPaymentTokenFromAPI', () => {
  it('should return a resolved promise when success is true',
    () => new Promise((done) => {
      getPaymentTokenFromAPI(true).then((response) => {
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        done();
      }).catch(done);
    }));

  it('should return a resolved promise of undefined when success is false',
    () => new Promise((done) => {
      getPaymentTokenFromAPI(false).then((response) => {
        expect(response).to.be.undefined;
        done();
      }).catch(done);
    }));
});
