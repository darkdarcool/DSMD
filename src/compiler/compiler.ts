import lex from "./lexer";
import parse from "./parser";

function splitLines(t: string) {
  return t.split(/\r\n|\r|\n/);
}

export default function compile(content: string): string[] {
  let parsed: any[] = [];
  let lines = splitLines(content);  
  // lines = lines.filter(e => e);
  console.log(lines)
  console.log(lines.length)
  let i = -1;
  for (let index = 0; lines.length; index++) {
    i++;
    parsed[i] = parse(lex(lines[index], index)); // 

    if (index >= 1000) { // FS strings keep making infinite loops
      break
    }
  }
  parsed = parsed.filter(x => isNaN(x)); // Filter out infinite loop items

  return parsed;
}