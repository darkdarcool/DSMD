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
  }
}

