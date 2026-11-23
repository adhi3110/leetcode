import {runTestCases} from "../../TesterFunction.ts";

function minEatingSpeed(piles: number[], h: number): number {
    let max = Math.max(...piles);

    if (h === piles.length) return max;

    const check = (e: number) => piles.reduce((a, b) => a + Math.ceil(b / e), 0) <= h;

    let s = 0
    let e = max
    let m = 0
    while (s < e) {
        m = s + Math.floor((e - s) / 2);
        if (check(m)) {
            e = m
        } else {
            s = m + 1
        }
    }

    return e

}

const TestCases: any[] = [
    [[3, 6, 7, 11], 8],
    [[30, 11, 23, 4, 20], 5],
    [[30, 11, 23, 4, 20], 6],
]

const results: any[] = [4, 30, 23]

runTestCases(TestCases, results, [], minEatingSpeed)
