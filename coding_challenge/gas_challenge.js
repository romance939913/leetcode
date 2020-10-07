// left side of ratio is gas, and right side is required gas to reach next stop
// return the index where you can circle through the array

// let Input = ["4","1:1","2:2","1:2","0:1"]
// let Output = impossible
// let Input2 = ["4","0:1","2:2","1:2","3:1"]
// let Output2 = 4

function ArrayChallenge(strArr) { 
    let arr = strArr.slice(1);
    let tries = 0;
  
    while (tries <= 4) {
      let gas = 0;
      let i = 0
      while (i < arr.length - 1) {
        if (i > 4) return 'impossible';
        let both = arr[i].split(":");
        gas += parseInt(both[0]);
        gas -= parseInt(both[1]);
        if (gas < 0) {
          tries ++;
          gas = 0; 
          let newLast = arr.shift();
          arr.push(newLast);
        } else {
          i++
        }
      }
    }
    return tries;
  }
     
  // keep this function call here 
  console.log(ArrayChallenge(readline()));
