module.exports = function(config) {
  config.addWatchTarget("./src/scss/");
  config.addWatchTarget("./src/js/");
  config.setWatchThrottleWaitTime(500);
  return {
    dir: {
      input: "./src",
      output: "./generated"
    }
  };
}