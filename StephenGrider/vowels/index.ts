// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

/* export function vowels(str: string) {
  const vowels = ["a", "e", "i", "o", "u"];
  return str.split("").reduce<number>((acc, char) => {
    return vowels.includes(char.toLowerCase()) ? acc + 1 : acc;
  }, 0);
} */
export function vowels(str: string) {
  const vowels = /[aeiou]$/i;
  return str.split("").reduce<number>((acc, char) => {
    return vowels.test(char) ? acc + 1 : acc;
  }, 0);
}
