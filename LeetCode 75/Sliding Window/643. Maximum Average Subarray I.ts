import {runTestCases} from "../../TesterFunction.ts";

function findMaxAverage(nums: number[], k: number): number {
    let contSum = 0
    for(let i = 0; i < k; i++) contSum += nums[i];
    let maxSum = contSum;

    for(let i = k; i < nums.length; i++) {
        contSum = contSum + nums[i] - nums[i-k];
        if(contSum > maxSum) maxSum = contSum;
    }

    return maxSum/k;
}

const TestCases: any[] = [
    [[1,12,-5,-6,50,3],4],
    [[5],1],
]

const results: any[] = [12.75, 5]

runTestCases(TestCases, results, [], findMaxAverage)
