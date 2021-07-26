var compile = require("./compiler/compiler.js");

function dsmd(content) {
  let markdown = compile(content);
  return markdown
}

module.exports = dsmd
