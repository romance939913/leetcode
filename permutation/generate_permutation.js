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

const permutator = (inputArr) => {
    let result = [];
    debugger
    const permute = (arr, m = []) => {
        if (arr.length === 0) {
            result.push(m)
        } else {
            for (let i = 0; i < arr.length; i++) {
                let curr = arr.slice();
                let next = curr.splice(i, 1);
                permute(curr.slice(), m.concat(next))
            }
        }
    }

    permute(inputArr)

    return result;
}

console.log(permutator(['c', 'a', 't']))