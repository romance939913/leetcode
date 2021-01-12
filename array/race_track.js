// input array is obstacles, car starts at position 2
// determine how many movements the car needs to make to reach the finish line

// arr = [3, 2, 1, 2, 3, 3, 2] two movements: from lane 2 -> 3 at arr[1] && from lane 3 -> 1 at arr[4]

// strategy: look which number is the furthest distance from your current point 
// OR non existant in rest of array.
// keep position and numMoves variable

// outcome: O(n) because it touches each element once

function minimumMovement(obstacleLanes) {
    let position = 2;
    let numMoves = 0;

    let i = 0;
    while (i < obstacleLanes.length) {
        if (obstacleLanes[i] !== position) {
            i++;
        } else {
            numMoves++;
            let hash = {};
            let searchLanes = true;
            while (searchLanes) {
                if (obstacleLanes[i] === undefined) break;
                hash[obstacleLanes[i]] = true;
                if (Object.keys(hash).length < 3) {
                    i++;
                } else {
                    searchLanes = false;
                    position = obstacleLanes[i]
                }
            }
        }
    }
    return numMoves;
}

console.log(minimumMovement([3, 2, 1, 2, 3, 3, 2]))
console.log(minimumMovement([3, 2, 1, 2]))