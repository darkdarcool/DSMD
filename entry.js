var DSMD = require('./src/index.js');
var fs = require('fs')

module.exports = {
  toMarkdown: DSMD.DSMD_Markdown,
  toHTML: DSMD.DSMD_HTML
};
let to = fs.readFileSync("./readme.dsmd", {encoding: "utf-8"});
console.log(DSMD.DSMD_Markdown(to));

