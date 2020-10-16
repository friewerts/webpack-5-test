function getCompiler({ webpackConfig, webpack }) {
  // 'Compiler' is a low-level interface to Webpack.
  // It lets us listen to some events and provide our own custom messages.

  let compiler;

  try {
    compiler = webpack(webpackConfig);
  } catch (err) {
    console.log("Failed to compile.");
    console.log();
    console.log(err.message || err);
    console.log();
    process.exit(1);
  }

  compiler.hooks.invalid.tap("invalid", () => {
    console.log("Compiling...");
  });

  compiler.hooks.done.tap("done", stats => {

    const statsData = stats.toJson({
      all: false,
      warnings: true,
      errors: true
    });

    console.log("done", JSON.stringify(statsData, null, 2));
  });

  return compiler;
}

module.exports = {
  getCompiler
};
