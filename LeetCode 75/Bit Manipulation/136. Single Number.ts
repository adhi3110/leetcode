import {runTestCases} from "../../TesterFunction.ts";

function singleNumber(nums: number[]): number {
    return nums.reduce((acc, num) => acc ^ num, 0);
}

const TestCases: any[] = [
    [[2,2,1]],
    [[4,1,2,1,2]],
    [[1]],
]

const results: any[] = [
    1, 4, 1
]

runTestCases(TestCases, results, [], singleNumber)
