export default function parse(data: any) {
  if (data == "0") return "0";
  if (data.type == ".") return data.content
  if (data.type == "new") return "newline-code:34340394fj4f44rf8j49jrwaj48u9rjr8jf48f8f498hf8h"
  return `${data.type} ${data.content}`; // Very good parser lol
}