/*
Collin's feedback

GREAT STRATEGY!:
- sample input-output (great tool for ensuring you understand the question)
- starting with clarifying Qs 
- strategy
- coding

- make sure to check any assumptions (including whether or not the input is sorted) — this was ultimately addressed with additional examples 👍

- great to turn to another example when need more time to come up with a strategy

- nice job starting to break down the steps of what your brain immediately sees as the logic, but takes for granted
   - when you need more granular step, ask WHY instead of WHAT 

- don't get stuck on coming up with the most optimal PoA immediately—start with brute force if need be

- good take away from practice with these problems — if it's quadratic, can I sort?

- don't get too stuck in familiar problems (this is not meeting rooms) — luckily this just threw off the language used to discuss the problem, not the logic, but still potentially misleading

- cursing is 100% ok with me, but don't get in the practice of dropping F-bombs during calls

- use declarative variable names! (`POJO` is nondescript)

- `Object.fromEntries()` is a great tool to have under your belt (although you don't need the object for this problem)

- write out your strategy once you have it, so you have a map to review when you get lost and don't have to re-derive the logic at each step 
*/

/*
mergeIntervals
takes in an array of intervals (2D Array)
Sub arrays are two elements consisting of a start and the end
return an array of non overlapping

input: [[0, 20], [0, 10], [5, 10], [15, 25], [30, 45]]
output: [[0, 25], [30, 45]]

obj = { 
    0: 20,
    5: 10, 
    15: 25,
    30: 45
}
start times = [0, 5, 15, 30]
end times = [10, 20, 25, 45]

input: [[5, 10], [0, 15], [10, 25], [15, 30]]
output [[0, 30]]

obj = {
    5: 10,
    0: 15,
    10: 25,
    15: 30
}
start times = [0, 5, 10, 15]

input: [[10, 15], [0, 5], [0, 15]]
output: [[0, 15]

obj = {
    0: 15,
    10: 15
}

input: [[10, 15], [0, 5], [0, 15]]
output: [[0, 15]

obj = {
    0: 15,
    10: 15
}

questions: Always have at lease one interval. Always expect intervals to be tuples. positive integers also, second is higher

strategy: keep a result variable = [] WRITE STRATEGY BEFORE STARTING CODING!!!!!!!!!!!
good

two pointer method: 

sorted array of all start times
sorted array of all end times

outcome: pojo creates redundent logic. retry with two pointer approach

*/

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
