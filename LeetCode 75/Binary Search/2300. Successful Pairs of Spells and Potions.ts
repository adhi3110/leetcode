import {runTestCases} from "../../TesterFunction.ts";

function successfulPairs(spells: number[], potions: number[], success: number): number[] {
    potions = potions.sort((a, b) => a - b);
    let pLength = potions.length
    let answer = []

    for (let i of spells) {
        if ((potions[0] * i ) > success) {
            answer.push(pLength)
            continue
        }

        if (potions[pLength-1] * i < success) {
            answer.push(0)
            continue
        }

        let s = 0;
        let e = pLength - 1
        let mid = 0
        while (s < e) {
            mid = s + Math.floor((e-s)/2)
            if(i*potions[mid] >= success) {
                e = mid
            } else {
                s = mid + 1
            }
        }

        answer.push(pLength-s)
    }

    return answer


}

const TestCases: any[] = [
    [[5, 1, 3], [1, 2, 3, 4, 5], 7],
    [[3, 1, 2], [8, 5, 8], 16],
    [[1,2,3,4,5,6,7],[1,2,3,4,5,6,7], 25]
]

const results: any[] = [[4, 0, 3], [2, 0, 2],[0,0,0,1,3,3,4]]

runTestCases(TestCases, results, [], successfulPairs)
