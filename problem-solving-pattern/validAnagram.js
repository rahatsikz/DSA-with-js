// frequency counter
function validAnagram(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }

  const lookup = {};

  for (let char of string1) {
    lookup[char] = (lookup[char] || 0) + 1;
  }

  for (let char of string2) {
    //char(from 2nd string) is not in lookup or char count in lookup is 0
    if (!lookup[char]) {
      return false;
    } else {
      // char(from 2nd string) is in lookup and decrement the char count by 1
      lookup[char] -= 1;
    }
  }

  return true;
}

console.log(validAnagram("aaz", "zza"));
console.log(validAnagram("anagram", "nagaram"));
console.log(validAnagram(" ", " "));
