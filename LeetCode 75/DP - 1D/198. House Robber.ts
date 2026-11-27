import {runTestCases} from "../../TesterFunction.ts";

function rob(nums: number[]): number {
    if(nums.length === 1) return nums[0]

    let dp = [nums[0] , Math.max(nums[0], nums[1])]

    for(let i = 2; i < nums.length; i++) {
        dp.push(Math.max(dp[i-1], dp[i-2] + nums[i]))
    }

    return Math.max(dp[nums.length - 1], dp[nums.length - 2] )
}

const TestCases: any[] = [
    [[1,2,3,1]],
    [[2,7,9,3,1]],
    [[2,1,1,2]]
]

const results: any[] = [4, 12, 4]

runTestCases(TestCases, results, [], rob)
