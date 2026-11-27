import {runTestCases} from "../../TesterFunction.ts";

function minFlips(a: number, b: number, c: number): number {
    let count = 0

    while (a > 0 || b > 0 || c > 0) {
        let ba = a & 1
        let bb = b & 1
        let bc = c & 1
        if (bc === 0) {
            if (ba === 1) count++
            if (bb === 1) count++
        } else {
            if (ba === 0 && bb === 0) count++
        }
        a = a >> 1
        b = b >> 1
        c = c >> 1
    }

    return count
}

const TestCases: any[] = [
    [2, 6, 5],
    [4, 2, 7],
    [1, 2, 3],
]

const results: any[] = [3, 1, 0]

runTestCases(TestCases, results, [], minFlips)
