const concat = require("concat");
(async function build() {
  const files = [
    "./dist/project-one/runtime.js",
    "./dist/project-one/polyfills.js",
    "./dist/project-one/main.js",
  ];
  await concat(files, "./dist/project-one/project-one.js");
})();
