import {runTestCases} from "../../TesterFunction.ts";

function longestOnes(nums: number[],k: number): number {
    let length = 0
    let l = 0;
    let r = 0;
    let numberOfZeros = 0
    while (r < nums.length) {
        if (numberOfZeros<k || nums[r]) {
            if (!nums[r]) numberOfZeros++;
            r++
        } else {
            if (!nums[l]) numberOfZeros--;
            l++
        }
        length = Math.max(length, r-l)
    }
    return length
}

const TestCases: any[] = [
    [[1,1,1,0,0,0,1,1,1,1,0],2],
    [[0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1],3],
]

const results: any[] = [6, 10]

runTestCases(TestCases, results, [], longestOnes)
