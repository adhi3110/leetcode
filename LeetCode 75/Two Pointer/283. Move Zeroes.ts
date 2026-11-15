import {runTestCases} from "../../TesterFunction.ts";

function moveZeroes(nums: number[]): number[] {
    let writeIndex = 0
    let index = 0
    while (index < nums.length) {
        if (nums[index] === 0) {
            index++
        } else {
            if (index !== writeIndex) {
                nums[writeIndex] = nums[index]
            }
            index++
            writeIndex++
        }
    }
    while (writeIndex < nums.length) {
        nums[writeIndex++] = 0
    }
    return nums
}

const TestCases: any[] = [
    [[0, 1, 0, 3, 12]],
    [[0]]
]

const results: any[] = [
    [1, 3, 12, 0, 0],
    [0]
]

runTestCases(TestCases, results, [], moveZeroes)