/* problem #206
Reverse a singly linked list.

Example:
Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL

Strategy:
easiest: iterate through linked list putting all nodes in an array.
reverse array and iterate through it making each ele LL node

optimal space solution: 
iterate through the list while node exists
variables current (the current node on the iteration)
previous is going to = current.next each iteration
*/

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var reverseList = function(head) {
    let prev = null;
    let curr = head;

    while (curr != null) {
        let nxtItr = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nxtItr;
    }
    return prev;
};