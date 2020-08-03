/* You are given an array of integers a. A new array b is generated by rearranging 
the elements of a in the following way:

b[0] is equal to a[0];
b[1] is equal to the last element of a;
b[2] is equal to a[1];
b[3] is equal to the second - last element of a;
and so on.
Your task is to determine whether the new array b is sorted in strictly 
ascending order or not.

Example

For a = [1, 3, 5, 6, 4, 2], the output should be alternatingSort(a) = true.

The new array b will look like[1, 2, 3, 4, 5, 6], which is in strictly ascending 
order, so the answer is true.

For a = [1, 4, 5, 6, 3], the output should be alternatingSort(a) = false.

The new array b will look like[1, 3, 4, 6, 5], which is not in strictly ascending 
order, so the answer is false. */

const alternatingSort = (array) => {
  let result = [];
  let counter = 2;
  let i = 0; 
  let j = array.length - 1;
  while (i <= j) {
    if (counter % 2 === 0) {
      result.push(array[i]);
      i++;
      counter++;
    } else {
      result.push(array[j]);
      j--;
      counter++;
    }
  }
  debugger
  let sorted = result.sort();
  debugger
  return sorted === result
}

console.log(alternatingSort([1, 3, 5, 6, 4, 2]))
console.log(alternatingSort([1, 4, 5, 6, 3]))