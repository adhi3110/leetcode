import {runTestCases} from "../../TesterFunction.ts";

function eraseOverlapIntervals(intervals: number[][]): number {
    intervals.sort((a, b) => a[1] - b[1]);

    let lastEnd = -Infinity;
    let removed = 0;

    for (const [start, end] of intervals) {
        if (start >= lastEnd) {
            lastEnd = end;
        } else {
            removed++;
        }
    }

    return removed;
}


const TestCases: any[] = [
    [[[1,2],[2,3],[3,4],[1,3]]],
    [[[1,2],[1,2],[1,2]]],
    [[[1,2],[2,3]]],
]

const results: any[] = [1, 2, 0]

runTestCases(TestCases, results, [], eraseOverlapIntervals)
