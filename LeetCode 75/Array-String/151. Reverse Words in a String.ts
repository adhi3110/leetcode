import {runTestCases} from "../../TesterFunction.ts";

function reverseWords(s: string): string {
    s = s.trim()
    return s.split(/\s+/).reverse().join(" ")
}

const TestCases: any[] = [
    ["example   good a"]
]

const results: any[] = [
    "a good example"
]

runTestCases(TestCases, results, [], reverseWords)