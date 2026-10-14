import {runTestCases} from "./TesterFunction.ts";

function sumOfSquares(nums: number[]): number {
    let res = 0;
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        if (n % (i + 1) === 0) {
            res = res + nums[i] * nums[i];
        }
    }

    return res;
}

const TestCases = [
    [[1, 2, 3, 4]]
]

let results = [
    21
]

runTestCases(TestCases, results, [], sumOfSquares);