/* problem 92

Reverse a linked list from position m to n. Do it in one-pass.
Note: 1 ≤ m ≤ n ≤ length of list.

Example:
Input: 1->2->3->4->5->NULL, m = 2, n = 4
Output: 1->4->3->2->5->NULL

@param {ListNode} head
@param {number} m
@param {number} n
@return {ListNode} 

Definition for singly-linked list. */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}


let argArr = [2, 3, 4, 5]
let list = new ListNode(1)
createList(list, argArr)

var reverseBetween = function(head, m, n) {
    let iterate = head;
    let arr = [iterate.val];
    debugger
    while (iterate.next !== null) {
        iterate = iterate.next;
        arr.push(iterate.val);
    }
    let reversed = arr.slice(m - 1, n).reverse();
    let newArr = arr.slice(0, m - 1).concat(reversed).concat(arr.slice(n));
    let newHead = new ListNode(newArr.shift());
    createList(newHead, newArr);
    return newHead;
};

function createList(node, arr) {
    if (!arr.length) return null;
    node.next = new ListNode(arr.shift())
    createList(node.next, arr);
}

console.log(reverseBetween(list, 2, 4))