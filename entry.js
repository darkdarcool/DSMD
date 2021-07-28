var DSMD = require('./src/index.js');

module.exports = {
  toMarkdown: DSMD.DSMD_Markdown,
  toHTML: DSMD.DSMD_HTML
};
let to = `# ({var a = {b: 10}; DSMD.getValue(a.b)})`;
console.log( DSMD.DSMD_Markdown(to));