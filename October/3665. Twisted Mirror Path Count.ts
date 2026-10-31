import {runTestCases} from "../TesterFunction.ts";

function calculateJumpIndex(i: number, j: number, direction: boolean, grid: number[][]) : number[] | undefined {
    let x = i, y = j
    let dir = direction
    while (true) {
        x = x + (dir ? 0 : 1);
        y = y + (dir ? 1 : 0);
        dir = !dir
        if (grid[x] && grid[x][y] === 0) {
            return [x, y]
        } else if (!grid[x] || grid[x][y] === undefined) {
            break
        }
    }
}

function uniquePaths(grid: number[][]): number {
    let n = grid.length;
    let m = grid[0].length;

    let resGrid = new Array(grid.length).fill(0).map(() => new Array(grid[1].length).fill(0));
    let jumpGrid = new Array(grid.length).fill(0).map(() => new Array(grid[1].length).fill(0));

    resGrid[0][0] = 1
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (i === 0 && j === 0) {
                resGrid[i][j] = 1;
                continue;
            }

            if (grid[i][j]) {
                if (j > 0) {
                    let res = calculateJumpIndex(i, j, false, grid)
                    if (res) jumpGrid[res[0]][res[1]] += resGrid[i][j - 1]
                }
                if (i > 0) {
                    let res = calculateJumpIndex(i, j, true, grid)
                    if (res) jumpGrid[res[0]][res[1]] += resGrid[i - 1][j]
                }
                resGrid[i][j] = 0
                continue
            }
            resGrid[i][j] = jumpGrid[i][j] + (i > 0 ? resGrid[i - 1][j] : 0) + (j > 0 ? resGrid[i][j - 1] : 0);
        }
    }
    return resGrid[n - 1][m - 1]

}


const TestCases: any[] = [
    [
        [
            [0, 1, 0],
            [0, 0, 1],
            [1, 0, 0]
        ]
    ],
    [
        [
            [0, 0, 0],
            [0, 0, 1],
            [1, 0, 0]
        ]
    ]
]

const results: any[] = [5, 5]

runTestCases(TestCases, results, [], uniquePaths)