/*
Design and implement a data structure for a compressed string iterator. The given compressed 
string will be in the form of each letter followed by a positive integer representing 
the number of this letter existing in the original uncompressed string.

Implement the StringIterator class:
next(): Returns the next character if the original string still has uncompressed characters, otherwise returns a white space.
hasNext(): Returns true if there is any letter needs to be uncompressed in the original string, otherwise returns false.
 
Example 1:
Input
["StringIterator", "next", "next", "next", "next", "next", "next", "hasNext", "next", "hasNext"]
[["L1e2t1C1o1d1e1"], [], [], [], [], [], [], [], [], []]
Output
[null, "L", "e", "e", "t", "C", "o", true, "d", true]

Explanation
StringIterator stringIterator = new StringIterator("L1e2t1C1o1d1e1");
stringIterator.next(); // return "L"
stringIterator.next(); // return "e"
stringIterator.next(); // return "e"
stringIterator.next(); // return "t"
stringIterator.next(); // return "C"
stringIterator.next(); // return "o"
stringIterator.hasNext(); // return True
stringIterator.next(); // return "d"
stringIterator.hasNext(); // return True

strategy: 
create three instance variables: 
["L1", "e2", "t1", "C1", "o1", "d1", "e1"]
next will check the element at the current idx and output element[0]
if element[1] === 1, decrement to 0 and increment idx
else if element[1] > 1, replace arr[idx][1] with arr[idx][1] -1
hasNext will check if arr[idx] has anything

"L10e2t1C1o1d1e11"
*/

class stringCompressIterator {
    constructor(compressedString) {
        this.idx = 0;
        this.arr = [];

        let left = 0;
        let right = 0;
        while (right < compressedString.length) {
            if (Number.isNaN(parseInt(compressedString[right + 1]))) {
                right ++;
                if (compressedString[right]) {
                    this.arr.push(compressedString.slice(left, right));
                } else {
                    this.arr.push(compressedString.slice(left, right - 1));
                }
                left = right;
            } else {
                right ++;
            }
        }
    }

    next() {
        const returnChar = this.arr[this.idx][0]
        if (parseInt(this.arr[this.idx].slice(1)) === 1) {
            this.idx ++;
        } else {
            let char = this.arr[this.idx][0]
            let newNum = parseInt(this.arr[this.idx].slice(1)) - 1;
            this.arr[this.idx] = `${char}${newNum}`
        }
        return returnChar;
    }

    hasNext() {
        return this.arr[this.idx] !== undefined
    }
}

let stringIterator = new stringCompressIterator("L1e2t1C1o1d1e1")
console.log(stringIterator.next()); // return "L"
console.log(stringIterator.next()); // return "e"
console.log(stringIterator.next()); // return "e"
console.log(stringIterator.next()); // return "t"
console.log(stringIterator.next()); // return "C"
console.log(stringIterator.next()); // return "o"
console.log(stringIterator.hasNext()); // return True
console.log(stringIterator.next()); // return "d"
console.log(stringIterator.hasNext()); // return True