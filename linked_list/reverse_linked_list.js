/* problem #206

Reverse a singly linked list.

Example:
Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL

Follow up:
A linked list can be reversed either iteratively or recursively. Implement both:

Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
@param {ListNode} head
@return {ListNode} */

var reverseList = function(head) {
    let arr = [head.val];
    let loop = head;
    while (!!loop.next) {
        loop = loop.next;
        arr.push(loop.val);
    }
    arr.reverse();
    let result = new ListNode(arr.shift());
    function iterate(node) {
        if (!arr.length) return null;
        let newNode = new ListNode(arr.shift());
        node.next = newNode;
        iterate(newNode);
    }
    iterate(result);
    return result;
};