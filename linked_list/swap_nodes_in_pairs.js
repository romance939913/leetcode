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

function createListFromArray(node, arr) {
    if (arr.length <= 0) return null;
    let nextNode = new ListNode(arr.shift());
    node.next = nextNode;
    createListFromArray(nextNode, arr)
}

var swapPairs = function (head) {
    let arr = [];
    let node = head;

    while (!!node) {
        arr.push(node.val);
        node = node.next;
    }

    let i = 0;
    while (i < arr.length - 1) {
        if (arr[i + 1] !== undefined) {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        }
        i += 2
    }

    let newHead = new ListNode(arr.shift());
    rebuildList(newHead, arr)

    return newHead;
};

let input = [4, 0, 6, 2, 8];
let inputHead = new ListNode(input.shift())
createListFromArray(inputHead, input)

console.log(swapPairs(inputHead))