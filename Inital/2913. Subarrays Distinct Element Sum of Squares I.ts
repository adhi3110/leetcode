import {runTestCases} from "../TesterFunction.ts";

function sumCounts(nums: number[]): number {
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            const x = new Set(nums.slice(i,j+1))
            res += x.size*x.size
        }
    }

    return res;
}

const TestCases = [
    [[1,2,1]]
]

const results = [15]

runTestCases(TestCases, results, [], sumCounts)