import {runTestCases} from "../TesterFunction.ts";

function minOperations(s: string): number {
    if (s.length === 1) return 0
    if (s.length === 2) return s[0] > s[1] ? -1 : 0

    let minChar = s[0]
    let minFreq = 0
    let maxChar = s[s.length - 1]
    let maxFreq = 0
    let sorted = true
    for (let i = 0; i < s.length; i++) {
        if (i < s.length - 1 && s[i] > s[i + 1]) sorted = false

        if (minChar === s[i]) {
            minFreq++
        } else if (minChar > s[i]) {
            minFreq = 1
            minChar = s[i]
        }
        if (maxChar === s[i]) {
            maxFreq++
        } else if (maxChar < s[i]) {
            maxFreq = 1
            maxChar = s[i]
        }
    }

    if(sorted) return 0

    /**
     * Cases to consider
     *
     * when min or max is in place
     * * string is already sorted return 1
     * * string is not sorted     return 0
     * * when max is in min place and min is not in max place
     * * when min is in max place and max is not in max place
     * when min and max are in the middle of the string
     *
     */


    if (minChar === s[0] || maxChar === s[s.length - 1]) return 1
    if (minChar !== s[s.length - 1] && maxChar !== s[0]) return 2
    if (maxChar === s[0] && (minFreq > 1 || minChar !== s[s.length - 1])) return 2
    if (minChar === s[s.length - 1] && (maxFreq > 1 || maxChar !== s[0])) return 2
    if (minChar === s[s.length - 1] && maxChar === s[0]) return 3
    return 2
}


const TestCases: any[] = [
    ["a"],
    ["ab"],
    ["ba"],
    ["jgg"],
]

const results: any[] = [0, 0, -1, 2]

runTestCases(TestCases, results, [], minOperations)