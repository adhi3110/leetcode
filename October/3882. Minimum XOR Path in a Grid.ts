import {runTestCases} from "../TesterFunction.ts";

function minCost(grid: number[][]): number {
    let resGrid: Uint8Array<ArrayBuffer>[][] = []


    for (let i = 0; i < grid.length; i++) {
        resGrid.push([])
        for (let j = 0; j < grid[i].length; j++) {
            resGrid[i].push(new Uint8Array(1024))

            if (i === 0 && j === 0) resGrid[i][j][grid[i][j]] = 1;
            else if (i === 0) {
                for (let k = 0; k < 1024; k++) {
                    if (resGrid[i][j - 1][k] === 1) {
                        resGrid[i][j][k ^ grid[i][j]] = 1;
                    }
                }
            }
            else if (j === 0){
                for (let k = 0; k < 1024; k++) {
                    if (resGrid[i - 1][j][k] === 1) {
                        resGrid[i][j][k ^ grid[i][j]] = 1;
                    }
                }
            }
            else {
                for (let k = 0; k < 1024; k++) {
                    if (resGrid[i][j - 1][k] === 1 || resGrid[i - 1][j][k] === 1) {
                        resGrid[i][j][k ^ grid[i][j]] = 1;
                    }
                }
            }
        }
    }
    return resGrid[grid.length-1][grid[0].length-1].findIndex(x => x===1)
}

// Read the contraints properly

const TestCases: any[] = [[[[1,2],[3,4]]]]

const results: any[] = [6]

runTestCases(TestCases, results, [], minCost)