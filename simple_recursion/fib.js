// return the nth number of the fibonacci sequence

// nthFib(8)
// 8th num in the fibonacci sequence
// decrement recursive calls back down to base case (1 & 2) 
// as it goes back down the stack, add the previous 2 call results

// sequennce: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55



function nthFib(n) {
    if (n === 1) return 1;
    if (n === 2) return 1;

    return nthFib(n - 1) + nthFib(n - 2) // => 
}

console.log(nthFib(30))

