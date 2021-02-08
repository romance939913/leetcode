/* 
search for a target element in an array
run time should be faster than O(n)
*/
function binarySearch(arr, target, start=0, end=arr.length) {
    if (start > end) return -1

    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
        return mid
    } else if (arr[mid] > target) {
        return binarySearch(arr, target, start, mid - 1);
    } else {
        return binarySearch(arr, target, mid + 1, end)
    }
}

console.log(binarySearch([1, 4, 6, 10, 14, 15, 20, 25, 37, 40], 1)) // => 0
console.log(binarySearch([1, 4, 6, 10, 14, 15, 20, 25, 37, 40], 10)) // => 3
console.log(binarySearch([1, 4, 6, 10, 14, 15, 20, 25, 37, 40, 45, 60, 69, 77, 91, 92, 100], 69)) // => 12
console.log(binarySearch([1, 4, 6, 10, 14, 15, 20, 25, 37, 40], 21)) // => -1
console.log(binarySearch([2, 5, 8, 10, 14, 15], 5)) // => 1