/* Leetcode #19

Given the head of a linked list, remove the nth node from the end of the list and 
return its head.

Example 1:
Input: head = [1, 2, 3, 4, 5], n = 2
Output: [1, 2, 3, 5]

Example 2:
Input: head = [1], n = 1
Output: []

Example 3:
Input: head = [1, 2], n = 1
Output: [1]

Questions: Are the node values always going to be their positions too?

Strategy: 

Outcome:
*/

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

function removeNthFromEnd(head, n) {
    let first = head;
    let second = head;
    
    let counter = 1;
    while (counter <= n) {
        second = second.next;
        counter ++;
    }
    if (second === null) {
        head.value = head.next.value;
        head.next = head.next.next;
    }
    while (second.next !== null) {
        
    }
}

/* first try, trying again fewer passes and smaller space complexit
var removeNthFromEnd = function(head, n) {
    let arr = [head];
    let node = head;
    debugger
    while (!!node.next) {
        arr.push(node.next);
        node = node.next;
    }

    arr = arr.slice(0, arr.length - n).concat(arr.slice(arr.length - (n - 1)))
    let newHead = arr.shift()
    newHead = new ListNode(newHead.val);

    function buildList(node) {
        if (arr.length === 0) return;
        let newNode = arr.shift();
        newNode = new ListNode(newNode.val);
        node.next = newNode;
        buildList(newNode)
    }   
    buildList(newHead)

    return newHead;
}
*/