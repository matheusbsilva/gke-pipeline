const chai = require('chai');
const expect = require('chai').expect;

chai.use(require('chai-http'));

const app = require('../app.js');

describe('Api users', function() {
  this.timeout(5000); // How long to wait for a response 

  before(function() {

  });

  after(function() {

  });

  it('Return 200 on root /', () => {
    return chai.request(app)
      .get('/')
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
      });
  });

  it('Returns 200 on topActiveUsers', () => {
    return chai.request(app)
      .get('/topActiveUsers')
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
      })
  });
})


