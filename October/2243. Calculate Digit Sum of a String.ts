import {runTestCases} from "../TesterFunction.ts";

function digitSum(s: string, k: number): string {
    while (s.length > k) {
        let tmp = []
        let n = s.length
        for(let i = 0; i < n; i+=k) {
            let val = 0
            for(let j = i; j < Math.min(n,i+k); j++) {
                val = val + +s[j]
            }
            tmp.push(val)
        }
        s = tmp.join("");
    }
    return s;
}

const TestCases: any[] = [
    ["11111222223",3],
    ["00000000",3],
]

const results: any[] = ["135", "000"]

runTestCases(TestCases, results, [], digitSum)
