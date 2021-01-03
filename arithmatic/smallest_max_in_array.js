/* 
question: Given a list of integers and a desired sum, write a function that calculates a threshold number x
such that when summing up the list of integers everything greater than x can be substituted with x
to give the desired sum.For example, if given a list[1, 2, 5] and a desired sum of 6. a threshold of
3 once applied to the list can yield the desired sum(i.e. 1 + 2 + 3 = 6) If there
are multiple of such thresholds we'd like to find the lowest one.

[1, 2, 5], 6  => 3
[40, 20, 10, 30], 70  => 20
[40, 20, 30, 10], 71  => 20.5
[40, 20, 10, 30], 100  => 40

[10, 20, 30, 40], 85
[20, 30, 40], 75
[30, 40], 55 => 27.5


type: algorithms_data_structures
*/

// Strategy
// sort the array to that the first one is the smallest


// Outcome

function thresholdNum(nums, target) {
    nums = nums.sort((a, b) => a - b);
    let defaultAns = nums[nums.length - 1];

    while (!!nums.length) {
        let tempSolution = target / nums.length;
        if (nums[0] > tempSolution) {
            return tempSolution
        } else {
            let subtractor = nums.shift();
            target = target - subtractor;
        }
    }
    return defaultAns
}


let arg = [1, 2, 5]
let arg1 = [40, 20, 10, 30]
let arg2 = [40, 20, 30, 10]
let arg3 = [40, 20, 10, 30]
let target = 6
let target1 = 70
let target2 = 71
let target3 = 100


console.log(thresholdNum(arg, target))
console.log(thresholdNum(arg1, target1))
console.log(thresholdNum(arg2, target2))
console.log(thresholdNum(arg3, target3))