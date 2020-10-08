// left side of ratio is the gas you receive at that stop
// right side of ratio is required gas to reach next stop
// return the index where you can circle through the array
// if it's impossible return the string 'impossible'

let input = ["4","1:1","2:2","1:2","0:1"] // => 'impossible'
let input2 = ["4","0:1","2:2","1:2","3:1"] // => 4

function gasChallenge(strArr) { 
  let arr = strArr.slice(1);
  let tries = 0;  
  let gas = 0;
  let i = 0;

  while (i <= arr.length - 1 && tries < 4) {
    let both = arr[i].split(":");
    gas += parseInt(both[0]);
    gas -= parseInt(both[1]);
    if (gas < 0) {
      tries++;
      gas = 0;
      i = 0; 
      let newLast = arr.shift();
      arr.push(newLast);
    } else {
      i++
    }
  }

  return tries < 4 ? tries + 1 : 'impossible';
}
     
// keep this function call here 
console.log(gasChallenge(input));
console.log(gasChallenge(input2));
