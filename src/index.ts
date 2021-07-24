import dsmd from "./bind";
import fs from 'fs';

function reduceNewlines(outputTextEditNewLines: any) {

  for (let key = 0; key < outputTextEditNewLines.length; key++) {
    if (outputTextEditNewLines[key] == '') outputTextEditNewLines[key] = '\n';
    else outputTextEditNewLines[key] = outputTextEditNewLines[key];
  }

  let arrayToString = outputTextEditNewLines.join(""); // convert object myArray to string
  console.log(arrayToString.replace(/([\r\n]){1,}/g, '\n\n')); // exports the text as it should

  return arrayToString.replace(/([\r\n]){1,}/g, '\n\n');

}

export default function DSMD(content: string) {
  let markdown = dsmd(content);
  let toReturn: any = "";
  for (let i = 0; markdown.length; i++) {
    toReturn = toReturn + markdown[i] + "\n";
    if (i >= 1000) break;
  }
  toReturn = toReturn.replace(/undefined/g, "");
  toReturn = toReturn.replace(/([\r\n]){2,}/g, '');
  return toReturn;

}

fs.appendFileSync("./readme.md", DSMD(fs.readFileSync("./readme.dsmd", "utf-8")))