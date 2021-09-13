// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

interface MaxElement {
  occours: number;
}

interface MaxElements {
  [key: string]: MaxElement;
}

export function maxChar(str: string): string {
  const maxDataStructure = str.split("").reduce<MaxElements>((acc, val) => {
    return acc.hasOwnProperty(val)
      ? { ...acc, [val]: { occours: acc[val].occours + 1 } }
      : { ...acc, [val]: { occours: 1 } };
  }, {});

  return Object.keys(maxDataStructure).reduce<string>((max, current) => {
    return maxDataStructure[current].occours > maxDataStructure[max].occours
      ? current
      : max;
  }, Object.keys(maxDataStructure)[0]);
}
