/* CodeSignal Problem
Given a sequence of integers as an array, determine whether it is possible to obtain 
a strictly increasing sequence by removing no more than one element from the array.
Note: sequence a0, a1, ..., an is considered to be a strictly increasing 
if a0 < a1 < ... < an.Sequence containing only one element is also considered to be strictly increasing.
Example

For sequence= [1, 3, 2, 1], the output should be
almostIncreasingSequence(sequence) = false.

There is no one element in this array that can be removed in order to get a strictly increasing sequence.

For sequence = [1, 3, 2], the output should be
almostIncreasingSequence(sequence) = true.

You can remove 3 from the array to get the strictly increasing sequence[1, 2].
Alternately, you can remove 2 to get the strictly increasing sequence[1, 3].
*/
























// const almostIncreasingSequence = (sequence) => {
//     let count = 0
//     let i = 0
//     // debugger
//     while (i < sequence.length && count < 2) {
//         let currentNum = sequence[i]

//         if (currentNum >= sequence[i + 1]) {
//             count++
            
//             if (currentNum >= sequence[i + 2]) {
//                 count++
//             } else {
//                 i++
//             }
//         }
//         i++;
//     }
//     return count < 2
// }

function almostIncreasingSequence(sequence) {
  var found = false;
  for (var i=0;i<sequence.length;i++) {
    if(sequence[i] <= sequence[i-1]) {
      if(found) {
        return false;
      }
      found = true;
      
      if(i === 1 || i + 1 === sequence.length) {
        continue;
      }
      else if (sequence[i] > sequence[i-2]) {
        sequence[i-1] = sequence[i-2];
      }
      else if(sequence[i-1] >= sequence[i+1]) {
        return false;
      }
    }
  }
  return true;
}

console.log(almostIncreasingSequence([1, 3, 2])) // true
console.log(almostIncreasingSequence([1, 3, 2, 1])) // false
console.log(almostIncreasingSequence([1, 2, 1, 2])) // false
console.log(almostIncreasingSequence([1, 2, 3, 4, 3, 6])) // true
console.log(almostIncreasingSequence([1, 2, 5, 3, 5])) // true
console.log(almostIncreasingSequence([1, 2, 3, 4, 3, 6, 7, 8, 9])) // true
