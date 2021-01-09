// You are given two non - empty linked lists representing two non - negative integers. 
// The most significant digit comes first and each of their nodes contain a single digit. 
// Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Follow up:
// What if you cannot modify the input lists ? In other words, reversing the lists is not allowed.

// Example:
// Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 8 -> 0 -> 7


// first attempt
// doesn't work with super large numbers where addition results in scientific notation
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

var addTwoNumbers = function (l1, l2) {
  let arr1 = [];
  let arr2 = [];

  function recurse(node, arr) {
    if (!node) return null;
    arr.push(node.val)
    recurse(node.next, arr);
  }
  recurse(l1, arr1);
  recurse(l2, arr2);

  let newNum = parseInt(arr1.join("")) + parseInt(arr2.join(""));
  let newArr = newNum.toString().split("");
  let newHead = new ListNode(parseInt(newArr.shift()));

  function buildList(node) {
    if (!newArr.length) return null;
    let newNode = new ListNode(parseInt(newArr.shift()));
    node.next = newNode;
    buildList(newNode);
  } 
  buildList(newHead)

  return newHead;
};