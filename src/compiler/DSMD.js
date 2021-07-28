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
  },
  require: (path) => {
    // Make it so it checks path to edit the path, like if the user provides ./
    let data = require(process.cwd() + `/${path}`);
    return data;
  },
  page: {
    halt: () => {
      return 'DSMD.ADMIN.HALT()'
    },
  },
  render: (content) => {
    return content
  }
}

