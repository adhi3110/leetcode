    import {runTestCases} from "../../TesterFunction.ts";

function equalPairs(grid: number[][]): number {
    let ans = 0
    let rowFreq: {[key: string]: number} = {};
    grid.map((x: number[]) => x.join("|")).forEach((x) => {
        if(rowFreq[x]) {
            rowFreq[x]++;
        } else {
            rowFreq[x] = 1 ;
        }
    })

    for(let i = 0; i < grid[0].length; i++) {
        let s = ""
        for(let j = 0; j < grid.length; j++) {
            s = s + grid[j][i] + "|";
        }
        s = s.slice(0, -1)
        if(rowFreq[s]) ans += rowFreq[s];
    }
    return ans
}

const TestCases: any[] = [
    [[[3,2,1],[1,7,6],[2,7,7]]],
    [[[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]],
    [[[11,1],[1,11]]]
]

const results: any[] = [1, 3, 2]

runTestCases(TestCases, results, [], equalPairs)
