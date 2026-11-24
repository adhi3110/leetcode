import {runTestCases} from "../TesterFunction.ts";

function longestCommonSubsequence(text1: string, text2: string): number {
    
}

const TestCases: any[] = [
    ["abcde","ace"],
    ["abc","abc"],
    ["abc","def"],
]

const results: any[] = [3, 3, 0]

runTestCases(TestCases, results, [], longestCommonSubsequence)
