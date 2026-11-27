import {runTestCases} from "../../TesterFunction.ts";

var ans = [0 ,1 ,1]

function tribonacci(n: number): number {
    if(ans[n]) return ans[n]

    for(let i= ans.length; i<= n; i++) {
        ans.push(ans[i-1] + ans[i-2] + ans[i-3])
    }

    return ans[n]
}

const TestCases: any[] = [
    [4],
    [25],
]

const results: any[] = [4, 1389537]

runTestCases(TestCases, results, [], tribonacci)
