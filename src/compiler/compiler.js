var lex = require("./lexer.js");
var parse = require("./parser.js");

function splitLines(t) {
  return t.split(/\r\n|\r|\n/);
}

function compile(content) {
  let parsed = [];
  let lines = splitLines(content);  
  let i = -1;
  for (let index = 0; lines.length; index++) {
    i++;
    parsed[i] = parse(lex(lines[index], index)) + "\n" // 

    if (index >= 1000) { // FS strings keep making infinite loops
      break
    }
  }
  parsed = parsed.filter(x => isNaN(x)); // Filter out infinite loop items
  parsed = `${parsed}`
  return parsed;
}
module.exports = compile;