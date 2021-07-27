var DSMD = require('./src/index.js');

module.exports = {
  toMarkdown: DSMD.DSMD_Markdown,
  toHTML: DSMD.DSMD_HTML
};
let to = `. ({(1 + 2) * 5})`
console.log("DSMD: " + to)
console.log("MARKDOWN: ", DSMD.DSMD_Markdown(to))