const concat = require("concat");
(async function build() {
  const files = [
    "./dist/project-two/runtime.js",
    "./dist/project-two/polyfills.js",
    "./dist/project-two/main.js",
  ];
  await concat(files, "./dist/project-two/project-two.js");
})();
