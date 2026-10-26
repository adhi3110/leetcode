import {runTestCases} from "../TesterFunction.ts";

function closedIsland(grid: number[][]): number {
    let islands = 0
    let n = grid.length
    let m = grid[0].length
    let visited: boolean[][] = []


    for (let i = 0; i < n; i++) {
        visited.push([])
        for (let j = 0; j < m; j++) {
            visited[i].push(false)
        }
    }

    console.table(grid)
    for (let i = 1; i < n - 1; i++) {
        for (let j = 1; j < m - 1; j++) {

            if (grid[i][j] === 0) {
                if (checkValidIsland(grid, i, j, visited)) {
                    console.log(i,j)
                    islands += 1
                }
            }
            visited[i][j] = true
        }
    }

    return islands
}

function checkValidIsland(grid: number[][], i: number, j: number, visited: boolean[][]): boolean {
    if (visited[i][j]) return false
    let isValidIsland = true
    let islandCheck = [[1, 0], [0, 1], [-1, 0], [0, -1]]
    let queue = [[i, j]]
    while (queue.length > 0) {
        let [a, b] = queue.shift()!
        if (visited[a][b]) continue
        for (let k of islandCheck) {
            visited[a][b] = true
            let newGrid = grid[a + k[0]] ? grid[a + k[0]][b + k[1]] : undefined
            if (newGrid === undefined) isValidIsland = false
            if (newGrid === 0) queue.push([a + k[0], b + k[1]])
        }

    }

    return isValidIsland
}


const TestCases: any[] = [
    [
        [
            [1, 1, 1, 1, 1, 1, 1, 0],
            [1, 0, 0, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 1, 1, 0],
            [1, 0, 0, 0, 0, 1, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 0]
        ]
    ],
    [
        [
            [0, 0, 1, 1, 0, 1, 0, 0, 1, 0],
            [1, 1, 0, 1, 1, 0, 1, 1, 1, 0],
            [1, 0, 1, 1, 1, 0, 0, 1, 1, 0],
            [0, 1, 1, 0, 0, 0, 0, 1, 0, 1],
            [0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
            [0, 1, 0, 1, 0, 1, 0, 1, 1, 1],
            [1, 0, 1, 0, 1, 1, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
            [1, 1, 1, 0, 0, 1, 0, 1, 0, 1],
            [1, 1, 1, 0, 1, 1, 0, 1, 1, 0]
        ]
    ]
]

const results: any[] = [2, 5]

runTestCases(TestCases, results, [], closedIsland)