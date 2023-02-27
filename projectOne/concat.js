const concat = require("concat");
(async function build() {
  const files = [
    "./dist/projectOne/runtime.js",
    "./dist/projectOne/polyfills.js",
    "./dist/projectOne/main.js",
  ];
  await concat(files, "./dist/projectOne/projectOne.js");
})();
