import {runTestCases} from "../TesterFunction.ts";

function sortableIntegers(nums: number[]): number {
    let ans = 0

    const n = nums.length

    let length = 1

    while (length <= nums.length) {
        let prevIndex = -1
        let valid = true
        for (let i = 0; i < nums.length; i += length) {
            let index = checkArraySort(nums.slice(i, i + length))

            if (index === -1) valid = false
            if (length === nums.length) continue
            if (prevIndex !== -1 && nums[index + i] < nums[prevIndex]) valid = false
            if (!valid) break
            prevIndex = i + (index - 1 + length) % length

        }

        if (valid) ans += length
        while (n % ++length !== 0 && length <= nums.length) {
        }
    }

    return ans
}

function checkArraySort(nums: number[]): number {
    let minIndex = -1
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < nums[(i - 1 + nums.length) % nums.length]) {
            if (minIndex !== -1) return -1
            else minIndex = i
        }
    }

    return minIndex === -1 ? 0 : minIndex
}

const TestCases: any[] = [
    [[3, 1, 2]],
    [[7, 6, 5]],
    [[12, 18, 14]],
    [[1, 2, 3, 4]],
    [[4, 1, 2, 3]],
    [[2, 1, 4, 3]],
    [[3, 4, 1, 2]]
]

const results: any[] = [3, 0, 0, 7, 4, 2, 4]

runTestCases(TestCases, results, [6], sortableIntegers)