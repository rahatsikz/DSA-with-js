// O(n) -> as n grows, the run time grows relative to n
function AddUpto(n) {
    let total = 0;
    for (let i = 0; i <= n; i++) {
        total += i;
    }
    return total;
}

// console.log(AddUpto(4));

const t1 = performance.now();
AddUpto(1000000000)
const t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);