import {runTestCases} from "../../TesterFunction.ts";

function combinationSum3(k: number, n: number): number[][] {
    if(n * 2 < k*(k+1)) return []
    let ans: number[][] = []

    function backtrack(k:number, n: number, minNumber: number,currentAnswer: number[], answers: number[][]) {
        let currentSum = currentAnswer.reduce((a,b) => a + b, 0)

        if(currentAnswer.length === k && currentSum === n) {
            answers.push(currentAnswer)
            return
        }

        if(currentAnswer.length === k) {
            return;
        }

        if(currentSum > n) {
            return;
        }

        for (let j = minNumber; j<=9 ; j++) {
            let x = [...currentAnswer, j]
            backtrack(k ,n, j+1, x, answers)
        }

    }

    backtrack(k ,n, 1, [], ans)


    return ans
}

const TestCases: any[] = [
    [3,7],
    [3,9],
    [4,1],
]

const results: any[] = [[[1,2,4]], [[1,2,6],[1,3,5],[2,3,4]], []]

runTestCases(TestCases, results, [], combinationSum3)
