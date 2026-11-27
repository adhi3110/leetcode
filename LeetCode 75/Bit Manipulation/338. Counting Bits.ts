import {runTestCases} from "../../TesterFunction.ts";

function countBits(n: number): number[] {
    let ans:number[] = [0]
    let i = 1
    let pow = 1
    while(i<=n) {
        if (i === pow) {
            pow = pow*2
            ans.push(1)
        } else {
            ans.push(1 + (ans[i- pow/2]))
        }
        i++
    }
    return ans
}

const TestCases: any[] = [
    [2],
    [5],
]

const results: any[] = [[0,1,1], [0,1,1,2,1,2]]

runTestCases(TestCases, results, [], countBits)
