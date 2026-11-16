import {runTestCases} from "../../TesterFunction.ts";

function longestSubarray(nums: number[]): number {
    let length = 0
    let l = 0;
    let r = 0;
    let isZeroPresent = false
    while (r < nums.length) {
        if (!isZeroPresent || nums[r]) {
            if (!nums[r]) isZeroPresent = true;
            r++
        } else {
            if (!nums[l]) isZeroPresent = false;
            l++
        }
        length = Math.max(length, r-l-1)
    }
    return length
}

/**
 * Keep track of the zero and move the left pointer accordingly
 * @param nums
 */
function longestSubarrayBetterApproach(nums: number[]): number {
    let left = 0;
    let lastZero = -1;
    let maxLen = 0;

    for ( let right = 0 ; right < nums.length; right++ ) {
        if (nums[right] === 0 ) {
            left = lastZero + 1;
            lastZero = right;
        }
        maxLen = Math.max(maxLen, right-left);
    }
    return maxLen
}

const TestCases: any[] = [
    [[1, 1, 0, 1]],
    [[0, 1, 1, 1, 0, 1, 1, 0, 1]],
    [[1, 1, 1]],
]

const results: any[] = [3, 5, 2]

runTestCases(TestCases, results, [], longestSubarray)
