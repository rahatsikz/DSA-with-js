// O(n) -> as n grows, the run time grows relative to n
function countUpandDown(n) {
    console.log('going up');
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
    console.log('going down');
    for (let j = n -1; j > 0; j--) {
        console.log(j);        
    }
}

countUpandDown(10)