const path = require("path");

module.exports = {
  entry: {
    app: [
      path.resolve("./src/js/index.js"),
      path.resolve("./src/styles/main.scss"),
    ],
  },
};
