const http = require('http');

const app = require('./app');
const exitHandler = require('./exitHandler');

const port = process.env.PORT || 4500;

exitHandler.setup();

const srvr = http.createServer(app);

srvr.listen(port, () => {
  console.log(`http://localhost:${port} is ready`);
});

function shutdown() {
  srvr.close();
  process.exit(0);
}

module.exports = {
  shutdown: shutdown
};

// module.exports = srvr;
