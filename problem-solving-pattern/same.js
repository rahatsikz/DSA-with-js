// frequency counter
function same(arr1, arr2) {
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};
  for (let num of arr1) {
    frequencyCounter1[num] = (frequencyCounter1[num] || 0) + 1;
  }
  for (let num of arr2) {
    frequencyCounter2[num] = (frequencyCounter2[num] || 0) + 1;
  }
  //   console.log({ frequencyCounter1, frequencyCounter2 });
  for (let key in frequencyCounter1) {
    const squared = key * key;
    if (frequencyCounter2[squared] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

console.log(same([1, 2, 3], [4, 1, 9]));
