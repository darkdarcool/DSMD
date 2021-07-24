export default function parse(data: any) {
  if (data == "0") return "0";
  return `${data.type} ${data.content}`; // Very good parser lol
}