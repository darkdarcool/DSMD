var compile = require("./compiler/compiler.js");
var API = require('./compiler/api.js')

function dsmd(content) {
  let markdown = compile(content);
  let old = markdown
  markdown = API(markdown)
  if (markdown == "") markdown = old;
  return markdown;
}

module.exports = dsmd
