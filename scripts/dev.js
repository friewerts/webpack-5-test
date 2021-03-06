// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = "development";
process.env.NODE_ENV = "development";

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on("unhandledRejection", err => {
  throw err;
});

// ====================================================

const WebpackDevServer = require("webpack-dev-server");
const webpack = require("webpack");

const webpackConfig = require("../webpack.config");
const { getCompiler } = require("../helpers/devServerHelpers");

// Create a webpack compiler that is configured with custom messages.
const compiler = getCompiler({
  webpackConfig,
  webpack
});

const devServerConfig = webpackConfig[0].devServer;

const devServer = new WebpackDevServer(compiler, devServerConfig);

// Launch WebpackDevServer.
devServer.listen(3001, "0.0.0.0", err => {
  if (err) {
    return console.log(err);
  }
});

["SIGINT", "SIGTERM"].forEach(sig => {
  process.on(sig, () => {
    devServer.close();
    process.exit();
  });
});
