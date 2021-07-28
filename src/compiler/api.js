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
  let canRender = false;
  for (var i = 0; nodes.length; i++) {
    if (i >= 1000) break;
    toReplace = `{${nodes[i]}}`;
    if (toReplace.includes('DSMD.render(')) canRender = true
    else if (toReplace.includes('DSMD.page.halt()')) canRender = true;
    try {
      let evaled = eval(`${fs.readFileSync(__dirname + "/DSMD.js", {encoding: "utf-8"})}\n\n${nodes[i]}`)
      toReplaceWith = evaled;
      if (canRender == true) {
        text = text.replace(toReplace, toReplaceWith);
        canRender = false;
      }
      else text = text.replace(toReplace, "");
    } catch {
      
    }
  }
  return text
}