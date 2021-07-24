export default function parse(data: any) {
  if (data == "0") return "0";
  if (data.type == ".") return data.content
  return `${data.type} ${data.content}`; // Very good parser lol
}