import {runTestCases} from "../TesterFunction.ts";

function sortPermutation(nums: number[]): number {
    let res = 2 ** 31 - 1;
    nums.forEach((x, i) => {
        if (x !== i) res = res & x
    })

    return res === 2**31-1 ? 0 : res

}


const TestCases: any[] = []

const results: any[] = []

runTestCases(TestCases, results, [], sortPermutation)