/* Leetcode # 2

You are given two non - empty linked lists representing two non - negative integers. 
The most significant digit comes first and each of their nodes contain a single digit. 
Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Follow up:
What if you cannot modify the input lists ? In other words, reversing the lists is not allowed.

Example:
Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 8 -> 0 -> 7

Questions:

Strategy: 
create a while loop that will loop until both l1 and l2 === null
add both values (unless ones null) and if its less then 10, link a new node with that value
if it's greater than 10, create a node with the modded val and carry a 1 to the next loop


Outcome:

*/

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
