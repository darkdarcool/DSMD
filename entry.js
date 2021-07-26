var DSMD = require('./src/index.js');
module.exports = DSMD;

var fs = require('fs')


fs.writeFileSync("./README.md", DSMD(fs.readFileSync("./readme.dsmd", "utf-8")))