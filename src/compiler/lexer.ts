export type lineType = {
  type: string,
  content: string
}

export default function lex(content: any, lineNumber: number) {
  content = new String(content);
  let tokens;
  let lineTokens: lineType;
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
  else {
    return "0";
  }
  return tokens;
}