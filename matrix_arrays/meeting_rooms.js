// Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), 
// find the minimum number of conference rooms required.

// Input: [[0, 30],[5, 10],[15, 20]]
// Output: 2

// Input: [[0, 30],[5, 10],[15, 20], [60, 70]]
// Output: 2 

// Input: [[0, 30],[5, 10],[5, 20]]
// Output: 3

// Input: [[7,10],[2,4]]
// Output: 1

// questions:
// Are the intervals only up to 60? ** NO **

// strategy:
// If I take all the start times and all the end times and sort them in separate arrays. 
// For each start time I'll need a new room until a start time occures after the first end time. 
// increment endTime pointer to the next endTime when iterating and a start comes after it

// outcome:
// O(n log(n))

const minMeetingRooms = (intervals) => {
  let startList = [];
  let endList = [];
  let endPos = 0;
  let rooms = 0;

  // O(n) operation
  for (let i = 0; i < intervals.length; i++) {
    startList.push(intervals[i][0]);
    endList.push(intervals[i][1]);
  }
  // Olog(n) operation
  startList.sort((a, b) => a - b);
  endList.sort((a, b) => a - b);

  // O(n) operation
  for (let i = 0; i < intervals.length; i++) {
    if (startList[i] < endList[endPos]) {
      rooms++;
    } else {
      endPos++;
    }
  }
  return rooms;
};

console.log(minMeetingRooms([[0, 30],[5, 10],[15, 20], [25, 30]])); // => 2
console.log(minMeetingRooms([[0, 30],[5, 10],[15, 20], [25, 30], [13, 30], [17, 20]])); // => 4
console.log(minMeetingRooms([[0, 30],[5, 10],[5, 20]])); // => 3
console.log(minMeetingRooms([[7,10],[2,4]])); // => 1