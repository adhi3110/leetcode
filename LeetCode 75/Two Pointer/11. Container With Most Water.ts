import {runTestCases} from "../../TesterFunction.ts";

function maxArea(height: number[]): number {
    let max: number = 0;
    let r = 0
    let l = height.length-1;

    while (r < l) {
        let area = Math.min(height[r], height[l]) * (l-r)
        max = Math.max(max, area);
        height[r] > height[l] ? l-- : r++
    }
    return max
}

const TestCases: any[] = []

const results: any[] = []

runTestCases(TestCases, results, [], maxArea)