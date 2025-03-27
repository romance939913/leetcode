/*
Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the LRUCache class:

LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
int get(int key) Return the value of the key if the key exists, otherwise return -1.
void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
The functions get and put must each run in O(1) average time complexity.


Example 1:
Input
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
Output
[null, null, null, 1, null, -1, null, -1, 3, 4]

Explanation
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1);    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2);    // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1);    // return -1 (not found)
lRUCache.get(3);    // return 3
lRUCache.get(4);    // return 4


strategy:
instance variables
a hashmap that acts as the cache
this.head which is the first node of our double linked list
this.tail which is the last node of our double linked list

Put: when we put a key:val in our cache, first we check if it's in our cache
if it is, we update that nodes val. take it out of the list in it's current spot
and add it to the end of our LinkedList as the MRU
if it's not in our cache, we add a node to the end of the LL and put it in our nodeMap
If we exceed our capacity (check len), we eject the node after the head position and
also eject it from our nodemap 
*/

class DLinkedNode {
    constructor(key=0, val=0) {
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.nodeMap = {};
        this.head = new DLinkedNode();
        this.tail = new DLinkedNode();
        this.head.next = this.tail;
        this.tail.prev = this.head;
        this.len = 0;
    }

    get(key) {

    }

    put(key, value) {

    }
}

const lRUCache = new LRUCache(2);
console.log(lRUCache.put(2, 1)); // cache is {1=1}
console.log(lRUCache.put(1, 1)); // cache is {1=1, 2=2}
// console.log(lRUCache.get(1));    // return 0
console.log(lRUCache.put(2, 3)); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
// console.log(lRUCache.get(2));    // returns -1 (not found)
console.log(lRUCache.put(4, 1)); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
console.log(lRUCache.get(1));    // return -1 (not found)
// console.log(lRUCache.get(3));    // return 3
console.log(lRUCache.get(2));    // return 4