var DSMD = require('./src/index.js');
var fs = require('fs')

module.exports = {
  toMarkdown: DSMD.DSMD_Markdown,
  toHTML: DSMD.DSMD_HTML
};

fs.writeFileSync("./readme.md", DSMD.DSMD_Markdown(fs.readFileSync('./readme.dsmd', encoding = "utf-8")))