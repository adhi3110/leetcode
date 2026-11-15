import {runTestCases} from "../../TesterFunction.ts";

function maxOperations(nums: number[], k: number): number {
    let ops = 0
    nums.sort((a, b) => a - b)
    let l = 0
    let r = nums.length - 1;

    while (l < r) {
        if ((nums[l] + nums[r]) > k) {
            r--
        } else if ((nums[l] + nums[r]) < k) {
            l++
        } else {
            ops++
            l++
            r--
        }
    }

    return ops
}




const TestCases: any[] = [
    [[1, 2, 3, 4], 5],
    [[3, 1, 3, 4, 3], 6]
]

const results: any[] = [2, 1]

runTestCases(TestCases, results, [], maxOperations)