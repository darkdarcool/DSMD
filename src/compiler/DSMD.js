function sayHello(name) {
  return `Hello ${name}!`
}


const DSMD = {
  new: {
    line: () => {
      return "\n";
    },
    link: (text, link) => {
      return `[${text}](${link})`;
    }
  },
  getValue: (value) => {
    return value; // Needed to get var values as return values
  }
}

