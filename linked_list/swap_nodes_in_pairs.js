/*Problem #24 

Given a linked list, swap every two adjacent nodes and return its head.

You may not modify the values in the list's nodes. Only nodes itself may be changed.

Example 1:
Input: head = [1,2,3,4]
Output: [2,1,4,3]

Example 2:
Input: head = []
Output: []

Example 3:
Input: head = [1]
Output: [1]
*/

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var swapPairs = function (head) {
    if(head === null || head.next === null) return head;

    let first = head.next; // => 4
    let second = head.next.next; // => null 
    
    first.next = head; // => 3
    head.next = swapPairs(second); null
    return first;
    // 2 -> 1 -> 4 -> 3 -> null
};

let head = new ListNode(1)
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);

console.log(swapPairs(head))