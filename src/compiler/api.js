const balanced = require('balanced-match')
const fs = require('fs')

function getContent(text) {
  var nodes = [];
  var i = -0;
  while (true) {
    i++
    if (i >= 1000) break;
    var thing = balanced('{', '}', `${text}`);
    // console.log(thing)
    if (!thing) break

    text = text.replace(`{${thing.body}}`, "");
    // console.log(text)
    nodes.push(thing.body)
  }
  return nodes
}

module.exports = (text) => {
  var nodes = getContent(text);
  let toReplace = "";
  let toReplaceWith = "";
  for (var i = 0; nodes.length; i++) {
    if (i >= 1000) break;
    toReplace = `{${nodes[i]}}`;
    try {
      let evaled = eval(`${fs.readFileSync(__dirname + "/DSMD.js", {encoding: "utf-8"})}\n\n${nodes[i]}`)
      toReplaceWith = evaled;
      text = text.replace(toReplace, toReplaceWith);
    } catch {
      
    }
  }
  return text
}