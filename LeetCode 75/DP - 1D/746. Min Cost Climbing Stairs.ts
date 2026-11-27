import {runTestCases} from "../../TesterFunction.ts";

function minCostClimbingStairs(cost: number[]): number {
    let dp = [0, 0]

    for(let i = 2; i <= cost.length; i++) {
        dp.push(
            Math.min(dp[i-1]+ cost[i-1], dp[i-2]+cost[i-2])
        )
    }

    return dp[cost.length]
}

const TestCases: any[] = [
    [[10,15,20]],
    [[1,100,1,1,1,100,1,1,100,1]],
]

const results: any[] = [15, 6]

runTestCases(TestCases, results, [], minCostClimbingStairs)
