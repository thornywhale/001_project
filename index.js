"use strict";
const testString = `rhgbvoihgo4gCJ%^%^CU%Ct34V
btgmhym,jyUY$i5hrtjjtrjy4390tcy4934cto3954vyyg
fgnfjytdjmdsthtr4554h4h4ty545rjjrjdtfjttrjrrsr
059u73460bvn4tc45U%^%^HU43tmJ%$O%$HO%$J%HG%JH%
$eo be ds'a hep;hBTRNGDNFSM$%FKOOOOOOOOO@$!.,/`;

// variant 1
const countVowelInString = (string, sep = "") => {
  const all = string.split(sep);
  const consonants = all.filter(
    (letter) =>
      letter !== "a" &&
      letter !== "A" &&
      letter !== "e" &&
      letter !== "E" &&
      letter !== "i" &&
      letter !== "I" &&
      letter !== "o" &&
      letter !== "O" &&
      letter !== "u" &&
      letter !== "U" &&
      letter !== "y" &&
      letter !== "Y"
  );
  return all.length - consonants.length;
};
//variant 2
const countVowelInString2 = (string, sep = "") => {
  const all = string.split(sep);
  const vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U", "y", "Y"];
  const consonants = all.filter((letter) => !vowels.includes(letter));
  return all.length - consonants.length;
};

try {
  console.log(
    "First variant. Vowels in string: " + countVowelInString(testString)
  );
  console.log(
    "Second variant. Vowels in string: " + countVowelInString2(testString)
  );
} catch (error) {
  if (error instanceof TypeError) {
    alert("ONLY STRING!!!");
  } else {
    alert("unknown error, sorry");
  }
}