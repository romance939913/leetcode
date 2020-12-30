function solution(S) {
    let i = 0;
    for (let j = 0; j < S.length; j++) {
        if (S[j] === 'A') {
            i = j;
            break;
        }
    }
    S = returnCounts(S.slice(i))
    return S
}

function returnCounts(str) {
    let ans = '';
    let switchIdx = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'B') {
            switchIdx = i;
            break;
        };
        ans = ans.concat('A');
    }
    for (let i = switchIdx; i < str.length; i++) {
        if (str[i] === 'B') ans = ans.concat('B');
    }
    return ans
}

console.log(solution('BAAABAB')) // => 'AAABB'
console.log(solution('BBAAABBABAA')) // => 'AAABBB'
console.log(solution('ABBBAA')) // => 'ABBB'