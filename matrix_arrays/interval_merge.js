/* Leetcode # 56
Collin's feedback
GREAT STRATEGY!:
- sample input-output (great tool for ensuring you understand the question)
- starting with clarifying Qs 
- strategy
- coding

- make sure to check any assumptions (including whether or not the input is sorted, which you did) 
- great to turn to another example when need more time to come up with a strategy
- nice job starting to break down the steps of what your brain immediately sees as the logic, but takes for granted
   - when you need more granular step, ask WHY instead of WHAT 
- don't get stuck on coming up with the most optimal PoA immediately—start with brute force if need be
- good take away from practice with these problems — if it's quadratic, can I sort?
- don't get too stuck in familiar problems (this is not meeting rooms) — luckily this just threw off the language used to discuss the problem, not the logic, but still potentially misleading
- cursing is 100% ok with me, but don't get in the practice of dropping F-bombs during calls
- use declarative variable names! (`POJO` is nondescript)
- `Object.fromEntries()` is a great tool to have under your belt (although you don't need the object for this problem)
- WRITE STRATEGY BEFORE STARTING TO CODE!!!!!!!!!!!, so you have a map to review when you get lost and don't have to re-derive the logic at each step
*/

/*
mergeIntervals
takes in an array of intervals (2D Array)
Sub arrays are two elements consisting of a start and the end
return an array of non overlapping

input: [[0, 20], [0, 10], [5, 10], [15, 25], [30, 45]]
output: [[0, 25], [30, 45]]

input: [[5, 10], [0, 15], [10, 25], [15, 30]]
output [[0, 30]]

input: [[10, 15], [0, 5], [0, 15]]
output: [[0, 15]

clarifications: 
- Input will always have at lease one interval. 
- Always expect intervals to be tuples, positive integers and the second is higher

strategy: keep a result variable = []. Sort our intervals. Keep a variable for our currentInterval
Loop and if intervals[i][0] comes before our currentInterval ending, merge the intervals.
Otherwise push the currentInterval to result and reset it with intervals[i]
*/

function mergeIntervals(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);

    let result = [];
    let currentInterval = intervals[0]

    for (let i = 0; i < intervals.length; i++) {
        if (intervals[i][0] < currentInterval[1]) {
            currentInterval[1] = Math.max(intervals[i][1], currentInterval[1])
        } else {
            result.push(currentInterval);
            currentInterval = intervals[i]
        }
    }

    result.push(currentInterval)
    return result
}

console.log(mergeIntervals([[10, 15], [0, 5], [0, 15]])) // => [[0, 15]]
console.log(mergeIntervals([[5, 10], [0, 15], [10, 25], [15, 30]])) // => [[0, 30]]
console.log(mergeIntervals([[0, 20], [0, 10], [5, 10], [15, 25], [30, 45]])) // => [[0, 25], [30, 45]]


/*

First try
outcome: pojo is unnecessary logic. Retry with two pointer approach

function mergeIntervals(intervals) {
    let pojo = {};
    let startTimes = [];
    let result = [];

    intervals.forEach(tup => {
        if (pojo[tup[0]]) {
            if (tup[1] > pojo[tup[0]]) pojo[tup[0]] = tup[1];
        }
        pojo[tup[0]] = tup[1]
        startTimes.push(tup[0])
    })

    startTimes = startTimes.sort((a, b) => a - b);

    let currentStartTime = startTimes[0];
    let currentEndTime = pojo[currentStartTime];

    for (let i = 0; i < startTimes.length; i++) {
        if (currentStartTime > currentEndTime) {
            result.push([currentStartTime, currentEndTime]);
            currentStartTime = startTimes[i];
            currentEndTime = pojo[startTimes[i]]
        }

        if (pojo[startTimes[i]] > currentEndTime) {
            currentEndTime = startTimes[i];
        }
        startTimes[i]
    }
}
*/