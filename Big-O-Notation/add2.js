// O(1) -> as n grows, the run time remains constant
function AddUpto(n) {
    return n * (n + 1) / 2;
}

// console.log(AddUpto(4));
const t1 = performance.now();
AddUpto(1000000000)
const t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);