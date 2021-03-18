

describe('Server Tests', () => {
  const srvr = require('../src/server');

  it("connects to server successfully", (done) => {
    const net = require('net');
    const client = net.connect({ port: 4500 }, function () {
      console.log('connected to server!');
      client.end();
      done();
    });

  })



})