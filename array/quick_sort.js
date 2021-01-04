// write a quicksort alg in JS

function quickSort(arr) {
    if (arr.length <= 1) return arr;

    let pivot = [arr[0]]
    let left = arr.slice(1).filter(ele => ele < pivot)
    let right = arr.slice(1).filter(ele => ele >= pivot)

    return quickSort(left).concat(pivot).concat(quickSort(right))
}

console.log(quickSort([5, 3, 7, 2, 1, 8, 0, 10]))