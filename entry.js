var DSMD = require('./src/index.js');

module.exports = {
  toMarkdown: DSMD.DSMD_Markdown,
  toHTML: DSMD.DSMD_HTML
};
let to = `# ({DSMD.new.link("hi", "https://google.com")})`;
console.log( DSMD.DSMD_Markdown(to));