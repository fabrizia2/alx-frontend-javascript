export default function cleanSet(set, startString) {
  let values = [];
  for (const val of set) {
    if (val.startsWith(startString)) {
      values.push(val.slice(startString.length));
    }
  }
  return values.join("-");
}
