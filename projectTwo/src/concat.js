const concat = require("concat");
(async function build() {
  const files = [
    "./dist/projectTwo/runtime.js",
    "./dist/projectTwo/polyfills.js",
    "./dist/projectTwo/main.js",
  ];
  await concat(files, "./dist/projectTwo/projectTwo.js");
})();
