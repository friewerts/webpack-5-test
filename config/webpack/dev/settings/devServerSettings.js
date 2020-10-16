const path = require("path");

module.exports = {
  devServer: {
    host: "0.0.0.0",
    contentBase: path.resolve("./target/"),
    open: false,
    hot: true,
    quiet: true,
    clientLogLevel: "none",
    port: 3001,
    watchContentBase: true
  }
};
