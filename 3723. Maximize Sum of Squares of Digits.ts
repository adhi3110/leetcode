import {runTestCases} from "./TesterFunction.ts";

function maxSumOfSquares(num: number, sum: number): string {
    return approach2(num, sum)
}

function buildNumber(num: number, sum: number, currentNumber: string): string {
    if (sum == 0) {
        if (num == 0) return currentNumber;
        return buildNumber(num - 1, sum, currentNumber + "0");
    }

    if (num == 0) return ""

    for (let i = 9; i >= 0; i--) {
        if (sum >= i)
            return buildNumber(num - 1, sum - i, currentNumber + i);
    }
    return ""
}

function approach2(num: number, sum: number): string {
    if (sum > num * 9) return ""
    let nines = Math.floor(sum / 9)
    let res = "9".repeat(nines)
    num = num - nines
    sum = sum - 9 * nines
    if (num > 0) {
        res = res + sum;
        num--
    }
    if (num > 0) res = res + "0".repeat(num)
    return res

}

const TestCases = [
    [2, 3],
    [2, 17],
    [1, 10],
    [16, 140]
]
const results = [
    "30",
    "98",
    "",
    "9999999999999995"
]

runTestCases(TestCases, results, [], maxSumOfSquares)