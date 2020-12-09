// Given 2 numbers that are of type string
// Write a function that sums the numbers and returns the new sum as a string
// These numbers are too large to be stored as integers.

// Example input:
// n1 = "5591234567890"
// n2 = "0091987654321"
// output = "83222222211"


//2b 
//slice anything past the billions place off the string

// new plan
// iterate from right to left on the strings
// adding the two integer places together, 
// if it’s above 10 then carry the 1 for the next iteration

const addStringIntegers = (n1, n2) => {
    let result = [];
    let larger = Math.max(n1.length, n2.length);
    
    while (n2.length < larger) {
        n2 = '0' + n2;
    }
    while (n1.length < larger) {
        n1 = '0' + n1;
    }
    let carried = 0;
    for (let i = larger - 1; i >= 0; i--) {
        let added = parseInt(n1[i]) + parseInt(n2[i])
        if (carried === 1){
            added += 1;
            carried = 0;
        }
        if (added.toString().length === 2) {
            result.push(added.toString()[1])
            carried = 1;
        } else {
            result.push(added.toString());
        }
    }
    return result.reverse().join('');
}

let n1 = "91234567890"
let n2 = "91987654321"
console.log(addStringIntegers(n1, n2))
// output = "83222222211"