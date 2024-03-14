// O(1) -> space complexity
// O(log n) -> time complexity
function numberofHalves(n) {
    let count = 0;
    while (n > 1) {
        n = n / 2; // 8/2 = 4 .. count = 1, 4/2 = 2 .. count = 2, 2/2 = 1.. count = 3
        count++;
        // console.log(count);
    }
    return count;
}

// console.log(numberofHalves(16));

// const t1 = performance.now();
// numberofHalves(16)
// const t2 = performance.now();
// console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);

// O(n) -> time complexity
function totalNumberOfHalves(n) {
    let total = 0;
    for (let i = 0; i < n; i++) {
      total += numberofHalves(n);
    //   console.log(total);
    }
    return total;
  }

console.log(totalNumberOfHalves(24))