export default function truncateText(str: string) {
  console.log(str + " this is tr");
  if (str.length < 25) return str;
  return str.substring(0, 25) + "...";
}
