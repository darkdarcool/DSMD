var isCode = require('./lexer.js').isCode

function parse(data) {

  if (data.type == ".") {
    if (typeof data.content === "object") {
      if (isCode == true) {
        
        return data.content
      }
      return "0"
    }
  }
  if (data.type == "code") {
    let content = data.content;
    if (content.includes('```')) return data.content
    else return "```"
  }
  if (data == "0") return "0";
  if (data.type == ".") return data.content
  if (data.type == "new") return "{DSMD.new.newline();}"
  return `${data.type} ${data.content}`; // Very good parser lol
}

module.exports = parse;