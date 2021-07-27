var { readFileSync } = require('fs')

function API(content) {
  let toReplace = "";
  let toReplaceWith = ""
  let o = `${content}`
  content = `${content}`; // Make it a string
  content = content.match(/[^{\}]+(?=})/g);
  let length;
  try {
    length = content.length;
  } catch {
    return ""
  }
  for (var i = 0; length; i++) {
    if (i >= 1000) {
      break
    }
    let line = content[i];
    let evaled = eval(`${readFileSync(__dirname + "/DSMD.js")}` + "\n" + line)
    toReplace = `${content[i]}`
    toReplaceWith = evaled
    o = o.replace(`{${toReplace}}`, toReplaceWith);
  }
  return o;
}

module.exports = API;