/* Complete the 'compareStrings' function below.

The function is expected to return an INTEGER.
The function accepts following parameters:
 1. STRING s1
 2. STRING s2

ex1:
s1 = "axx#bb#c"
s2 = "axbd#c#c"
returns true

ex2:
s1 = "yf#c#"
s2 = "yy#k#pp##"
returns  true
           
clarifications: strings don't need to be the same length apparently

initial strategy: create two pointers at the last character in the strings and a jump amount variable for each pointer
loop through the length of each string
if the two pointers contain the same value continue
if the current character in the iteration is a "#" increment the jump amount and check the next character.
Once a non "#" character is reached, jump by the jump amount, 
compare the characters once finished jumping, if they're not the same then return false early
if you get through the whole string, return true
       
outcome: O(n) time and O(1) space 
*/

function compareStrings(s1, s2) {
    let p1 = s1.length - 1;
    let p2 = s2.length - 1;
    let jump1 = 0;
    let jump2 = 0;

    while (!!s1[p1] && !!s2[p2]) {
        while (s1[p1] === "#") {
            jump1++;
            p1--;
        }
        if (jump1 > 0) p1 -= jump1;
        while (s2[p2] === "#") {
            jump2++;
            p2--;
        }
        if (jump2 > 0) p2 -= jump2;
        jump1 = 0;
        jump2 = 0;
        if (s1[p1] === "#" || s2[p2] === "#") {
            continue
        } else {
            if (s1[p1] !== s2[p2]) {
                return false;
            } else {
                p1--;
                p2--;
            }
        }
    }
    return true
}

let s1 = "yf#c#";
let s2 = "yy#k#pp##";
console.log(compareStrings(s1, s2)) // => true

s1 = "lyf#c#";
s2 = "lyy#k#pp##";
console.log(compareStrings(s1, s2)) // => true

// **** fix below ****
s1 = "bxj##tw"
s2 = "bxo#j##tw"
console.log(compareStrings(s1, s2)) // => true