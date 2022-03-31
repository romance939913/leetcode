/* Leetcode #19
Given the head of a linked list, remove the nth node from the end of the list and 
return its head.

Example 1:
Input: head = [1, 2, 3, 4, 5], n = 2
Output: [1, 2, 3, 5]

Example 3:
input: head = [6, 7, 8, 9, 10, 11, 12, 13, 14], n = 4
output: [6, 7, 8, 9, 10, 12, 13, 14]

Example 3:
Input: head = [1], n = 1
Output: []

Example 4:
Input: head = [1, 2], n = 1
Output: [1]

Questions: Are the node values always going to be their positions too?

Strategy: 

*/

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

function removeNthFromEnd(head, n) {
    let p1 = head;
    let p2 = head;

    while (n > 0) {
        p2 = p2.next;
        n--;
    }

    if (!p2) {
        head = head.next;
        return head;
    }

    while (p2.next) {
        p1 = p1.next;
        p2 = p2.next;
    }
    p1.next = p1.next.next;
    return head;
}

// makes a linked list for testing
function makeListFromArray(node, arr) {
    if (!arr.length) return null;
    node.next = new ListNode(arr.shift());
    makeListFromArray(node.next, arr)
}
let arr1 = [6, 7, 8, 9, 10, 11, 12, 13, 14];
let headNode = new ListNode(arr1.shift());
makeListFromArray(headNode, arr1);
console.log(removeNthFromEnd(headNode, 4)) // => [6, 7, 8, 9, 10, 12, 13, 14]


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