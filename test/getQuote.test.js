const { expect, assert } = require("chai");
const sinon = require('sinon');
const axios = require('axios');
const getQuote = require('../src/getQuote');

describe('get quote', () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });


  it('axios get stub returns expected success', (done) => {
    const result = 'Quote 2 of the day';
    // const resolved = new Promise((r) => r({ "data": { "joke": result } }));
    // sandbox.stub(axios, 'get').returns(resolved);
    // sandbox.stub(axios, "get").resolves(Promise.resolve({ "data": { "joke": result } }));
    const sstub = sandbox.stub(axios, 'get');
    sstub.resolves(Promise.resolve({ "data": { "joke": result } }));

    getQuote()
      .then((res) => {
        expect(res).to.equal('Quote 2 of the day');
        done();
      })
      .catch(err => {
        expect(false);
        done();
      })
  });

  it('axios get stub returns expected failure', (done) => {
    const result = '500 error';
    const sstub = sandbox.stub(axios, 'get');
    sstub.resolves(Promise.reject({ result }));
    // sstub.rejects(Promise.reject({ result }));

    getQuote()
      .then((res) => {
        expect(false);
      })
      .catch(err => {
        expect(err.result).to.equal('500 error');
        done();
      });
  });
});

