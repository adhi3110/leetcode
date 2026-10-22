import {runTestCases} from "../TesterFunction.ts";

function minOperations(nums: number[]): number {
    let ops = -1;
    let n = nums.length;
    if (n <= 1) return 0
    let isInc = true
    let isDec = true
    let flipIndexInc = -1
    let flipIndexDec = -1

    for (let i = 0; i < nums.length; i++) {
        if (isInc && nums[i] > nums[(i + 1) % n]) {
            if (flipIndexInc === -1) {
                flipIndexInc = (i + 1) % n
            } else {
                isInc = false
            }
        }

        if (isDec && nums[i] < nums[(i + 1) % n]) {
            if (flipIndexDec === -1) {
                flipIndexDec = (i + 1) % n
            } else {
                isDec = false
            }
        }

        if (!isInc && !isDec) return -1
    }

    if (isInc) {
        return Math.min(flipIndexInc, 2 + n - flipIndexInc)
    }

    if (isDec) {
        return Math.min(1 + flipIndexDec, 1 + n - flipIndexDec)
    }


    return ops
}


const TestCases: any[] = [
    [[0, 2, 1]],
    [[1, 0, 2]]
]

const results: any[] = [2, 2]

runTestCases(TestCases, results, [], minOperations)