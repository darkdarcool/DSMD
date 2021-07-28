var compile = require("./compiler/compiler.js");
var API = require('./compiler/api.js')

function dsmd(content) {
  let markdown = compile(content);
  let old = markdown
  markdown = API(markdown)
  if (markdown == "") markdown = old;
  else {
    markdown = markdown.split('\n')
    for (var i = 0; markdown.length; i++) {
      let line = markdown[i];
      try {
        if (line[0] == ",") {
          line = line.substring(1);
        }
      }
      catch {

      }
      if (i >= 1000) break;
      markdown[i] = line
    }
    markdown = markdown.join('\n')
  }
  let before = markdown;
  markdown = markdown.substr(0, markdown.indexOf('DSMD.ADMIN.STOP()')); 
  if (markdown == "") markdown = before;
  return markdown;
}

module.exports = dsmd

