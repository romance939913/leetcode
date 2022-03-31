/* Leetcode 1290 convert Binary number in a Linked list to integer
Given head which is a reference node to a singly - linked list.The value of each 
node in the linked list is either 0 or 1. The linked list holds the binary 
representation of a number.

Return the decimal value of the number in the linked list.

Example 1:
Input: head = [1, 0, 1]
Output: 5
Explanation: (101) in base 2 = (5) in base 10

Example 2:
Input: head = [0]
Output: 0

*/

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

function convertToInt(head) {
    let length = 0
    let result = 0

    function recurse(head) {
        if (!head) {
            return null;
        }

        recurse(head.next);
        if (head.val === 1) {
            result += 2 ** length;
        }
        length ++;
    }

    recurse(head);
    return result;
}


function makeListFromArray(node, arr) {
    if (!arr.length) return null;
    node.next = new ListNode(arr.shift());
    makeListFromArray(node.next, arr)
}

let arr1 = [1, 0, 1, 0];
let arr2 = [0, 1, 0, 1]; 
let l1 = new ListNode(arr1.shift());
let l2 = new ListNode(arr2.shift());
makeListFromArray(l1, arr1);
makeListFromArray(l2, arr2);
console.log(convertToInt(l1)); // => 10
console.log(convertToInt(l2)); // => 5