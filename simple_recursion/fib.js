// return the nth number of the fibonacci sequence

// nthFib(8)
// 8th num in the fibonacci sequence
// decrement recursive calls back down to base case (1 & 2) 
// as it goes back down the stack, add the previous 2 call results

// sequennce: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55



function nthFib(n, memo={ 1: 1, 2: 1}) {
    if (n in memo) return memo[n];

    memo[n] = nthFib(n - 1, memo) + nthFib(n - 2, memo) 
    return memo[n]
}

console.log(nthFib(3))
console.log(nthFib(4))
console.log(nthFib(5))
console.log(nthFib(6))
console.log(nthFib(50))

