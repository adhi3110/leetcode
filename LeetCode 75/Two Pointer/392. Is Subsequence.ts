import {runTestCases} from "../../TesterFunction.ts";

function isSubsequence(s: string, t: string): boolean {
    let i = 0;
    let j = 0;

    if(s.length == 0) return true

    while(i < s.length && j < t.length) {
        if (s[i] == t[j]) {
            i ++
            j ++
        } else {
            j ++
        }

        if(i == s.length) {
            return true
        }
    }
    return false

}
const TestCases: any[] = []

const results: any[] = []

runTestCases(TestCases, results, [], isSubsequence)