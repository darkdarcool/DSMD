import compile from "./compiler/compiler";

export default function dsmd(content: string) {
  let markdown:any = compile(content);
  return markdown
}

