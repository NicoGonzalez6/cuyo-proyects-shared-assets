const handlebarsHelper = require("../helpers/icon-name-to-codepoint");
const fs = require("fs");
const path = require("path");

const codepointsPath = path.join(__dirname, "../../dist/icons/codepoints.json");
const codepoints = JSON.parse(fs.readFileSync(codepointsPath, "utf-8"));
handlebarsHelper.registerHelpers();

module.exports = {
  inputDir: "./dist/icons/svg",
  outputDir: "./dist/icons/font",
  fontTypes: ["ttf", "woff", "woff2"],
  assetTypes: ["css", "json", "html"],
  name: "shared-assets",
  prefix: "icon",
  codepoints,
  normalize: true,
  templates: {
    css: "./src/templates/css.hbs",
  },
  formatOptions: {
    json: {
      indent: 2,
    },
    ts: {
      types: ["constant", "literalId"],
      singleQuotes: true,
    },
  },
};
