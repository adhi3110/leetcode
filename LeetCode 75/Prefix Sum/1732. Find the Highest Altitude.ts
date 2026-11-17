import {runTestCases} from "../../TesterFunction.ts";

function largestAltitude(gain: number[]): number {
    let prefixSum = 0
    let max = 0

    for(let i of gain) {
        prefixSum += i
        max < prefixSum && (max = prefixSum);
    }

    return max;
}

const TestCases: any[] = [
    [[-5,1,5,0,-7]],
    [[-4,-3,-2,-1,4,3,2]],
]

const results: any[] = [1, 0]

runTestCases(TestCases, results, [], largestAltitude)
