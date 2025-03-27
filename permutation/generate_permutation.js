/* ************************* NOT A LEETCODE PROBLEM *******************************

generate a permutation of an array of characters

ex1:
input: ['c','a','t']
output: 
[ [ 'c', 'a', 't' ],
  [ 'c', 't', 'a' ],
  [ 'a', 'c', 't' ],
  [ 'a', 't', 'c' ],
  [ 't', 'c', 'a' ],
  [ 't', 'a', 'c' ] ]

Strategy:
create an iterator i 
*/

const permutations = (inputArr) => {
    let result = [];
    debugger
    const permute = (arr, newArr = []) => {
        if (arr.length === 0) {
            result.push(newArr)
        } else {
            for (let i = 0; i < arr.length; i++) {
                let curr = arr.slice();
                let next = curr.splice(i, 1);
                permute(curr.slice(), newArr.concat(next))
            }
        }
    }

    permute(inputArr)
    return result;
}

console.log(permutations(['c', 'a', 't']))