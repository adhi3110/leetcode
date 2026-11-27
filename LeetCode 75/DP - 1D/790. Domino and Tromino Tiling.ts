import {runTestCases} from "../../TesterFunction.ts";

function numTilings(n: number): number {
    let res = [0, 1, 2, 5]

    if (n<=3) {
        return res[n]
    }

    for(let i = 4 ; i<=n ; i++ )  {
        res[i] = (2*res[i-1] + res[i-3]) % 1000000007
    }

    return res[n]
}

const TestCases: any[] = [
    [3],
    [1],
]

const results: any[] = [5, 1]

runTestCases(TestCases, results, [], numTilings)
