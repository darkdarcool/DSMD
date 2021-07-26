export type lineType = {
  type: string,
  content: string
}
let isCode = false;
export default function lex(content: any, lineNumber: number) {
  content = new String(content);
  let tokens;
  let lineTokens: lineType;
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
    lineTokens = {
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
    lineTokens = {
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
    lineTokens = {
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
    lineTokens = {
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
    lineTokens = {
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
    lineTokens = {
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
    lineTokens = {
      type: ">",
      content: text
    }
    tokens = lineTokens;
    if (tokens.content == "> (") {
      throw (`Unclosed bracket on line ${lineNumber + 1}!`)
    }
  }
  else if (content == "") {
    lineTokens = {
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
      lineTokens = {
        type: "code",
        content: codeType
      }
      isCode = true;
      tokens = lineTokens;
    }
  }
  else {
    if (content != "undefined") {
      lineTokens = {
        type: ".",
        content: content
      }
      tokens = lineTokens;
    }
    else return 0;
  }
  return tokens;
}