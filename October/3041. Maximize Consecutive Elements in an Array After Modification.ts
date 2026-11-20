import {runTestCases} from "../TesterFunction.ts";

function maxSelectedElements(nums: number[]): number {
    nums.sort((a, b) => a - b);
    const dp = new Map<number, number>();
    let ans = 0;
    for (const x of nums) {
        dp.set(x + 1, Math.max(dp.get(x + 1) ?? 0, (dp.get(x) ?? 0) + 1));
        dp.set(x, Math.max(dp.get(x) ?? 0, (dp.get(x - 1) ?? 0) + 1));
        ans = Math.max(ans, dp.get(x)!, dp.get(x + 1)!);
    }
    return ans;
}
const TestCases: any[] = [
    [[2, 1, 5, 1, 1]],
    [[1, 4, 7, 10]],
    [[8, 10, 6, 12, 9, 12, 2, 3, 13, 19, 11, 18, 10, 16]],
    [[4, 7, 8, 9, 9, 11, 11, 12, 14, 19]]
]

const results: any[] = [3, 1, 8, 8]

runTestCases(TestCases, results, [], maxSelectedElements)
