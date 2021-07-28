var { readFileSync } = require('fs')
const BalancedBrackets = require('balanced-brackets');

function getContent(content) {
  contnet = new String(content)
  content = content.replace(/#/g, "")
  const balanced = new BalancedBrackets(`${content}`);
  var actual = []
  while (true) {
    let obj = balanced.extractBracketed('{}', /[a-z0-9\s]*/i);

    if (!obj.extracted) {
        break;
    } else {
        actual.push(obj.extracted);
    }
  }
  return actual
}

function API(content) {
  contnet = `${content}`
  var e = content
  let o = `${content}`;
  let parsed = getContent(content);
  let value = "";
  let toReplace = "";
  let toReplaceWith = "";
  for (var i = 0; parsed.length; i++) {
    if (i >= 1000) break;
    value = `${parsed[i]}`;
    toReplace = `${value}`
    value = value.slice(1,-1);
    if (value == "ndefine") {

    }
    else {
      let evaled = eval(`${readFileSync(__dirname + "/DSMD.js")}` + "\n" + `${value}`)
      toReplaceWith = evaled;
      o = o.replace(`${toReplace}`, `${toReplaceWith}`)
    }

  }
  return o
}


module.exports = API;