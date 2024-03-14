// O(1)
function logAtMostFive(n) {
    for(let i = 1; i <= Math.min(5,n); i++) {
        console.log(i);
    }
}

logAtMostFive(8)