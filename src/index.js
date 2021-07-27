var dsmd = require("./bind.js");
var md = require('markdown-it')();

function DSMD_Markdown(content) {
  let markdown = dsmd(content);
  let toReturn = "";
  for (let i = 0; markdown.length; i++) {
    toReturn = toReturn + markdown[i] // + "\n";
    if (i >= 1000) break;
  }
  toReturn = toReturn.replace(/undefined/g, "");
  toReturn = toReturn.replace(/([\r\n]){2,}/g, '\n');
  toReturn = toReturn.replace(/{DSMD.new.newline()}/g, "") // Make this better later with DSMD api
  return toReturn;
}
function DSMD_HTML(content) {
  let markdown = DSMD_Markdown(content);
  var result = md.render(markdown);
  return result;

}
module.exports = {
  DSMD_Markdown,
  DSMD_HTML
};
