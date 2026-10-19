import {runTestCases} from "../TesterFunction.ts";

function targetIndices(nums: number[], target: number): number[] {
    nums = nums.sort((a, b) => a - b)

    let baseIndex = binarySearch(nums, target)
    if (baseIndex === -1) return []

    while (baseIndex > 0) {
        if (nums[baseIndex - 1] === target) baseIndex--
        else break
    }


    let res = []
    while (baseIndex < nums.length && nums[baseIndex] === target) res.push(baseIndex++)
    return res
}

function binarySearch(nums: number[], target: number): number {
    let low = 0;
    let high = nums.length - 1;
    while (low <= high) {
        let mid = Math.floor((high + low) / 2);
        if (nums[mid] === target) return mid
        if (nums[mid] > target) high = mid-1
        if (nums[mid] < target) low = mid+1
    }
    return -1
}

const TestCases = [
    [[1,2,5,2,3], 2],
    [[1,2,5,2,3], 3],
    [[1,2,5,2,3], 4],
    [[1,2,5,2,3], 5],
]

const results = [
    [1,2],
    [3],
    [],
    [4]
]

runTestCases(TestCases,results, [2], targetIndices)