import {runTestCases} from "../TesterFunction.ts";

function minimizeSum(nums: number[]): number {
    if (nums.length === 3) return 0
    nums.sort((a, b) => a - b);
    return Math.min(nums[nums.length - 1] - nums[2], nums[nums.length - 3] - nums[0], nums[nums.length - 2] - nums[1]);
}

const TestCases: any[] = [
    [[1, 4, 7, 8, 5]],
    [[1, 4, 3]],
    [[58,42,8,75,28]]
]

const results: any[] = [3, 0, 30]

runTestCases(TestCases, results, [], minimizeSum)
