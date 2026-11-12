import {runTestCases} from "../TesterFunction.ts";

function longestMonotonicSubarray(nums: number[]): number {
    let subArrayLength = 1;
    let currentSubArrayLength = 1;
    let isIncreasing = false;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            currentSubArrayLength = 1;
            isIncreasing = false;
            continue
        }

        if (nums[i] > nums[i - 1]) {
            if(isIncreasing) {
                currentSubArrayLength += 1
            } else {
                isIncreasing = true;
                currentSubArrayLength = 2
            }

        }
        if (nums[i] < nums[i - 1]) {
            if(!isIncreasing) {
                currentSubArrayLength += 1
            } else {
                isIncreasing = false;
                currentSubArrayLength = 2
            }
        }
        if (subArrayLength < currentSubArrayLength) subArrayLength = currentSubArrayLength;
    }
    return subArrayLength
}

const TestCases: any[] = [
    [[1,4,3,3,2]],[[3,3,3,3]],[[3,2,1]]
]

const results: any[] = [
    2,
    1,
    3
]

runTestCases(TestCases, results, [], longestMonotonicSubarray)