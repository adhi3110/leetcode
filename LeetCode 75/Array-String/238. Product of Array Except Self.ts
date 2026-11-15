import {runTestCases} from "../../TesterFunction.ts";

function productExceptSelf(nums: number[]): number[] {
    let res = new Array(nums.length).fill(1)

    let p = 1
    for (let i = 0; i < nums.length; i++) {
        res[i] = res[i]*p
        p = p*nums[i]
    }

    p = 1
    for (let i = nums.length-1; i >=0; i--) {
        res[i] = res[i]*p
        p = p*nums[i]
    }
    return res
}

const TestCases: any[] = [
    [[1,2,3,4]],
    [[-1,1,0,-3,3]]
]

const results: any[] = [
    [24,12,8,6],
    [0,0,9,0,0]
]

runTestCases(TestCases, results, [], productExceptSelf)