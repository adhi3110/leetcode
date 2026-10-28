import {runTestCases} from "../TesterFunction.ts";


/**
 * New commit makes the dp or the res grid j * 1024 instead of i * j * 1024
 * reason being we do not require any value after i-1
 * @param grid
 */
function minCost(grid: number[][]): number {
    let resGrid: Uint8Array<ArrayBuffer>[] = []

    for (let i = 0; i < grid.length; i++) {
        let next = []
        for (let j = 0; j < grid[i].length; j++) {
            next.push(new Uint8Array(1024))

            if (i === 0 && j === 0) {
                next[j][grid[i][j]] = 1;
            }
            else if (i === 0) {
                for (let k = 0; k < 1024; k++) {
                    if (next[j - 1][k] === 1) {
                        next[j][k ^ grid[i][j]] = 1;
                    }
                }
            } else if (j === 0) {
                for (let k = 0; k < 1024; k++) {
                    if (resGrid[j][k] === 1) {
                        next[j][k ^ grid[i][j]] = 1;
                    }
                }
            } else {
                for (let k = 0; k < 1024; k++) {
                    if (next[j - 1][k] === 1 || resGrid[j][k] === 1) {
                        next[j][k ^ grid[i][j]] = 1;
                    }
                }
            }
        }

        resGrid = next
    }
    return resGrid[grid[0].length - 1].findIndex(x => x === 1)
}

// Read the contraints properly

const TestCases: any[] = [[[[1, 2], [3, 4]]]]

const results: any[] = [6]

runTestCases(TestCases, results, [], minCost)