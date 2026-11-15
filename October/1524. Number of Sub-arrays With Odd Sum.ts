import {runTestCases} from "../TesterFunction.ts";

function numOfSubarrays(arr: number[]): number {
    let count = 0
    let prefix_sum = 0
    let oddCount = 0
    let evenCount = 1

    for (let i of arr) {
        prefix_sum += i
        if (prefix_sum % 2) {
            oddCount++
            count += evenCount
        } else {
            evenCount++
            count += oddCount
        }
        count = count%1000000007
    }
    return count
}

const TestCases: any[] = [
    [[1, 3, 5]],
    [[2, 4, 6]],
    [[1, 2, 3, 4, 5, 6, 7]]
]

const results: any[] = [4, 0, 16]

runTestCases(TestCases, results, [], numOfSubarrays)