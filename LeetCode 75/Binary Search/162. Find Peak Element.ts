import {runTestCases} from "../../TesterFunction.ts";

function findPeakElement(nums: number[]): number {
    let  s= 0
    let e = nums.length - 1;
    let m  = 0;

    while (s<e) {
        m = s + Math.floor((e-s)/2);
        if (nums[m] > nums[m+1]) {
            e = m
        } else {
            s = m + 1
        }
    }

    return e
}

const TestCases: any[] = [
    [[1,2,3,1]],
    [[1,2,1,3,5,6,4]],
]

const results: any[] = [2, 5]

runTestCases(TestCases, results, [], findPeakElement)
