// O(n^2) -> as n grows, the run time grows relative to n square -> quadratic
function printAllPairs(n) {
    for (let i = 0; i < n; i++ ) {
        for (let j = 0; j < n; j++){
            console.log(i, j);
        }
    }
}

printAllPairs(3) 