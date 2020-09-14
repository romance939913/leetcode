/* Problem 234

Given a singly linked list, determine if it is a palindrome.

Example 1:
Input: 1->2
Output: false

Example 2:
Input: 1->2->2->1
Output: true
Follow up:
Could you do it in O(n) time and O(1) space?

Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
@param {ListNode} head
@return {boolean} */

var isPalindrome = function(head) {
    if (!head) return true;

    let arr = [head.val];
    let loop = head;

    while (!!loop.next) {
        loop = loop.next;
        arr.push(loop.val)
    }

    let i = 0;
    let j = arr.length - 1;

    while (i < j) {
        if (arr[i] !== arr[j]) return false;
        i++;
        j--;
    }
    
    return true;
};