function exitHandler(options, err) {
  if (err) {
    var msg = 'EXIT with error: ' + err.stack;
    console.log(msg);
  }

  if (options.cleanup) {
    // cleanup();
  }

  if (options.exit) {
    process.exit();
  }

}

function setup() {
  // so the program will not close instantly
  process.stdin.resume();

  // Clean up when app closes
  process.on('exit', exitHandler.bind(null, { cleanup: true }));

  // Catch Ctrl-C event
  process.on('SIGINT', exitHandler.bind(null, { exit: true }));

  // Catch uncaught exceptions
  process.on('uncaughtException', exitHandler.bind(null, { exit: true }));
}

module.exports = {
  setup: setup
}