import {runTestCases} from "../../TesterFunction.ts";

function maxVowels(s: string, k: number): number {
    let vovCount = 0
    for(let i =0; i< k;i++) if("aeiou".indexOf(s[i]) !== -1) vovCount ++
    let maxCount = vovCount
    for(let i = k; i < s.length; i++) {
        if("aeiou".indexOf(s[i]) !== -1) vovCount ++
        if("aeiou".indexOf(s[i-k]) !== -1) vovCount --
        if(vovCount > maxCount) maxCount = vovCount
    }
    return maxCount
}

const TestCases: any[] = [
    ["abciiidef",3],
    ["aeiou",2],
    ["leetcode",3],
]

const results: any[] = [3, 2, 2]

runTestCases(TestCases, results, [], maxVowels)
