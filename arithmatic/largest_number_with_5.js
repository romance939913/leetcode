/*
where would the number be the largest if you add a 5
*/

function solution(N) {
    let ans = '';
    if (N > 0) {
        str = N.toString()
        for (let i = 0; i < str.length; i++) {
            if (parseInt(str[i]) < 5) {
                ans = ans.concat('5') + str.slice(i);
                break
            } else {
                ans = ans.concat(str[i]);
            }
        }
        if (!ans.includes('5')) ans = ans.concat('5')
        return parseInt(ans);
    } else {
        str = N.toString().slice(1)
        for (let i = 0; i < str.length; i++) {
            if (parseInt(str[i]) >= 5) {
                ans = ans.concat('5') + str.slice(i);
                break
            } else {
                ans = ans.concat(str[i]);
            }
        }
        if (!ans.includes('5')) ans = ans.concat('5')
        return parseInt(ans) * (-1);
    }
}

console.log(solution(678))
console.log(solution(670))
console.log(solution(275))
console.log(solution(-999));
console.log(solution(-20));