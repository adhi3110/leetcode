import {runTestCases} from "../TesterFunction.ts";

function minimumSumSubarray(nums: number[], l: number, r: number): number {
    let prefixSum = [nums[0]]
    let minSum = -1
    for (let i = 1; i < nums.length; i++) prefixSum.push(nums[i] + prefixSum[i - 1]);
    for (let i = 0; i <= nums.length - l ; i++) {
        for (let j = l - 1; j < r && ((j + i) < nums.length); j++) {

            let ps = i === 0 ? prefixSum[j] : prefixSum[j + i] - prefixSum[i - 1]

            if (ps > 0 && (ps < minSum || minSum === -1)) {
                minSum = ps
            }

        }
    }
    return minSum
}

const TestCases: any[] = [
    [[3, -2, 1, 4], 2, 3],
    [[-2, 2, -3, 1], 2, 3],
    [[1, 2, 3, 4], 2, 4],
    [[7, 3], 2, 2],
    [[-12, 8], 1, 1],
]

const results: any[] = [1, -1, 3, 10, 8]

runTestCases(TestCases, results, [], minimumSumSubarray)
