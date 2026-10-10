import {runTestCases} from "./TesterFunction.ts";

function sequentialDigits(low: number, high: number): number[] {
    const result: number[] = [];
    const combinations = "123456789";
    const n = ("" + low).length;
    const m = ("" + high).length;

    for (let i = 0; i < 10 - n; i++) {
        for (let j = 1; j <= m  && (i+j)<10; j++) {
            let num = +combinations.substring(i, i + j);
            if (num >= low && num <= high) {
                result.push(num)
            }
        }
    }

    return result.sort((a, b) => a - b);
}

const Testcases = [
    [100, 300],
    [1000, 13000]
]

const results = [
    [123, 234],
    [1234, 2345, 3456, 4567, 5678, 6789, 12345]
]

runTestCases(Testcases, results, [], sequentialDigits)
