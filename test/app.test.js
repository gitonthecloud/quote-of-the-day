const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect, assert } = require("chai");
const sinon = require('sinon');
const app = require('../src/app');


chai.use(chaiHttp);

describe('API Tests', () => {

  it("retrieve one joke of the day successfully", (done) => {

    let srvr = app.listen(5500, () => {
      chai.request(app)
        .get('/')
        .end((err, res) => {
          srvr.close();
          expect(res.statusCode).equal(200);
          expect(res.text).to.be.not.null;
          done();
        });
    })
  })


  it("retrieve one joke of the day containing specified query parameter value successfully", (done) => {

    let srvr = app.listen(5500, () => {
      chai.request(app)
        .get('?q=Java')
        .end((err, res) => {
          srvr.close();
          expect(res.statusCode).equal(200);
          expect(res.text).to.be.not.null;
          expect(res.text).to.contain("Java");
          done();
        });
    })
  })

})


