var isCode = false;
function lex(content, lineNumber) {
  content = new String(content);
  var tokens;
  var lineToken;
  if (isCode == true) {
    let lineTokens = {
      type: "",
      content: content
    }
    tokens = lineTokens;
  }
  if (content.charAt(0) == "#") {
    try {
      var text = content.substring(
        content.lastIndexOf("(") + 1,
        content.lastIndexOf(")")
      );
    } catch {
      throw new Error("Error");
    }
    let lineTokens = {
      type: "#",
      content: text
    }
    tokens = lineTokens;
    if (tokens.content == "# (") {
      throw (`Unclosed bracket on line ${lineNumber + 1}!`)
    }
  }
  else if (content.charAt(0) == "##") {
    try {
      var text = content.substring(
        content.lastIndexOf("(") + 1,
        content.lastIndexOf(")")
      );
    } catch {
      throw new Error("Error");
    }
    let lineTokens = {
      type: "##",
      content: text
    }
    tokens = lineTokens;
    if (tokens.content == "## (") {
      throw (`Unclosed bracket on line ${lineNumber + 1}!`)
    }
  }
  else if (content.charAt(0) == "###") {
    try {
      var text = content.substring(
        content.lastIndexOf("(") + 1,
        content.lastIndexOf(")")
      );
    } catch {
      throw new Error("Error");
    }
    let lineTokens = {
      type: "###",
      content: text
    }
    tokens = lineTokens;
    if (tokens.content == "### (") {
      throw (`Unclosed bracket on line ${lineNumber + 1}!`)
    }
  }
  else if (content.charAt(0) == "####") {
    try {
      var text = content.substring(
        content.lastIndexOf("(") + 1,
        content.lastIndexOf(")")
      );
    } catch {
      throw new Error("Error");
    }
    let lineTokens = {
      type: "####",
      content: text
    }
    tokens = lineTokens;
    if (tokens.content == "#### (") {
      throw (`Unclosed bracket on line ${lineNumber + 1}!`)
    }
  }
  else if (content.charAt(0) == "#####") {
    try {
      var text = content.substring(
        content.lastIndexOf("(") + 1,
        content.lastIndexOf(")")
      );
    } catch {
      throw new Error("Error");
    }
    let lineTokens = {
      type: "#####",
      content: text
    }
    tokens = lineTokens;
    if (tokens.content == "##### (") {
      throw (`Unclosed bracket on line ${lineNumber + 1}!`)
    }
  }
  else if (content.charAt(0) == ".") {
    try {
      var text = content.substring(
        content.lastIndexOf("(") + 1,
        content.lastIndexOf(")")
      );
    } catch {
      throw new Error("Error");
    }
    let lineTokens = {
      type: ".",
      content: text
    }
    tokens = lineTokens;
    if (tokens.content == ". (") {
      throw (`Unclosed bracket on line ${lineNumber + 1}!`)
    }
  }
  else if (content.charAt(0) == ">") {
    try {
      var text = content.substring(
        content.lastIndexOf("(") + 1,
        content.lastIndexOf(")")
      );
    } catch {
      throw new Error("Error");
    }
    let lineTokens = {
      type: ">",
      content: text
    }
    tokens = lineTokens;
    if (tokens.content == "> (") {
      throw (`Unclosed bracket on line ${lineNumber + 1}!`)
    }
  }
  else if (content == "") {
    let lineTokens = {
      type: "new",
      content: ""
    }
    tokens = lineTokens
  }
  else if (content.charAt(0) == "`" || content.charAt(1) == "`" || content.charAt(2) == "`") {
    if (isCode == true) {
      isCode = false;
      let lineTokens = {
        type: "code",
        content: ""
      }
      tokens = lineTokens
    }
    else {
      let codeType = content.substring(content.indexOf("```"));
      let lineTokens = {
        type: "code",
        content: codeType
      }
      isCode = true;
      tokens = lineTokens;
    }
  }
  else {
    if (content != "undefined") {
      let lineTokens = {
        type: ".",
        content: content
      }
      tokens = lineTokens;
    }
    else return 0;
  }
  return tokens;
}
module.exports = lex;