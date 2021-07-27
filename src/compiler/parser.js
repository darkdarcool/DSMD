var isCode = require('./lexer.js').isCode

function parse(data) {
  if (data.type == ".") {
    if (typeof data.content === "object") {
      if (isCode == true) {
        
        return data.content + "\n"
      }
      return "0"
    }
  }
  if (data.type == "code") {
    let content = data.content;
    if (content.includes('```')) return data.content + "\n"
    else return "```" + "\n"
  }
  if (data == "0") return "0";
  if (data.type == ".") return data.content + "\n"
  if (data.type == "new") {
    return "\n"
  }
  return `${data.type} ${data.content}`; // Very good parser lol
}

module.exports = parse;