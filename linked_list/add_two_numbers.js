/* Leetcode # 2

You are given two non - empty linked lists representing two non - negative integers. 
The most significant digit comes first and each of their nodes contain a single digit. 
Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Follow up:
What if you cannot modify the input lists ? In other words, reversing the lists is not allowed.

Example:
Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 8 -> 0 -> 7

Questions:

Strategy: 
create a while loop that will loop until both l1 and l2 === null
add both values (unless ones null) and if its less then 10, link a new node with that value
if it's greater than 10, create a node with the modded val and carry a 1 to the next loop


Outcome:

*/

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

function addTwoNumbers(l1, l2) {
  let carry = 0;
  let node = null;
  node = helper(l1, l2);
  let newHead = node;
  if (l1) l1 = l1.next;
  if (l2) l2 = l2.next;
  while (l1 || l2) {
    node.next = helper(l1, l2);
    node = node.next;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  function helper(l1, l2) {
    let sum = 0;
    if (!l1) {
      sum = l2.val + carry
    } else if (!l2) {
      sum = l1.val + carry
    } else {
      sum = l1.val + l2.val + carry;
    }
    if (sum > 9) {
      sum %= 10;
      carry = 1
    } else {
      carry = 0;
    }
    return new ListNode(sum);
  }
  if (carry === 1) node.next = new ListNode(carry);
  return newHead
};



function makeListFromArray(node, arr) {
  if (!arr.length) return null;
  node.next = new ListNode(arr.shift());
  makeListFromArray(node.next, arr)
}
let arr1 = [9, 9, 9, 9, 9, 9, 9];
let arr2 = [9, 9, 9, 9]
let l1 = new ListNode(arr1.shift());
let l2 = new ListNode(arr2.shift());
makeListFromArray(l1, arr1);
makeListFromArray(l2, arr2);
console.log(addTwoNumbers(l1, l2))
