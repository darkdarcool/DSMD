var dsmd = require("./bind.js");
var md = require('markdown-it')();

function DSMD_Markdown(content) {
  let markdown = dsmd(content);
  let toReturn = "";
  for (let i = 0; markdown.length; i++) {
    toReturn = toReturn + markdown[i] + "\n";
    if (i >= 1000) break;
  }
  toReturn = toReturn.replace(/undefined/g, "");
  toReturn = toReturn.replace(/([\r\n]){2,}/g, '\n');
  toReturn = toReturn.replace(/newline-code:34340394fj4f44rf8j49jrwaj48u9rjr8jf48f8f498hf8h/g, "") // Make this better later with DSMD api
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
