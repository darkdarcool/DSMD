import dsmd from "./bind";
import fs from 'fs';

export default function DSMD(content: string) {
  let markdown = dsmd(content);
  let toReturn: any = "";
  for (let i = 0; markdown.length; i++) {
    toReturn = toReturn + markdown[i] + "\n";
    if (i >= 1000) break;
  }
  toReturn = toReturn.replace(/undefined/g, "");
  toReturn = toReturn.replace(/([\r\n]){2,}/g, '\n');
  toReturn = toReturn.replace(/newline-code:34340394fj4f44rf8j49jrwaj48u9rjr8jf48f8f498hf8h/g, "")
  console.log(toReturn)
  return toReturn;
}

fs.appendFileSync("./README.md", DSMD(fs.readFileSync("./readme.dsmd", "utf-8")))