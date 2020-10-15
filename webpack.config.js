const { merge } = require("webpack-merge");

const entryConfigModule = require("./config/webpack/base/settings/entry/module");
const entryConfigLegacy = require("./config/webpack/base/settings/entry/legacy");

const outputConfigModule = require("./config/webpack/base/settings/output/module");
const outputConfigLegacy = require("./config/webpack/base/settings/output/legacy");

const compileSCSS = require("./config/webpack/base/tasks/compileSCSS");

module.exports = [
  merge(entryConfigModule, outputConfigModule, compileSCSS),
  merge(entryConfigLegacy, outputConfigLegacy, compileSCSS),
];
