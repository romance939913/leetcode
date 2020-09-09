/*
Problem #21
Merge two sorted linked lists and return it as a new sorted list. 
The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4

Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

@param {ListNode} l1
@param {ListNode} l2
@return {ListNode}
*/

var mergeTwoLists = function(l1, l2) {
    if (!l1 && !l2) return null;
    if (!l1) return l2;
    if (!l2) return l1;
    
    let root;
    
    function iterate(l1, l2, newList) {
        if (!l1 && !l2) return null;
        
        if (!l1) {
            newList.next = new ListNode(l2.val);
            iterate(l1, l2.next, newList.next);
        } else if (!l2) {
            newList.next = new ListNode(l1.val);
            iterate(l1.next, l2, newList.next);            
        } else if (l2.val < l1.val) {
            newList.next = new ListNode(l2.val);
            iterate(l1, l2.next, newList.next);
        } else if (l1.val <= l2.val) {
            newList.next = new ListNode(l1.val);
            iterate(l1.next, l2, newList.next);
        }
    }
    
    if (l1.val <= l2.val) {
        root = new ListNode(l1.val);
        iterate(l1.next, l2, root);
    } else {
        root = new ListNode(l2.val);
        iterate(l1, l2.next, root);
    } 
    
    return root;
};