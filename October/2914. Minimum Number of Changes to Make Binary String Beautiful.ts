import {runTestCases} from "../TesterFunction.ts";

function minChanges(s: string): number {
    let count = 0;
    for(let i =0; i< s.length; i+=2) {
        if(s[i] != s[i+1]) count++
    }
    return count;
}

const TestCases: any[] = [
    ["1001"],
    ["10"],
    ["0000"],
]

const results: any[] = [2, 1, 0]

runTestCases(TestCases, results, [], minChanges)
