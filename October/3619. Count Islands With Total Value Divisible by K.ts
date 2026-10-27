import {runTestCases} from "../TesterFunction.ts";

function countIslands(grid: number[][], k: number): number {
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
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            let score = checkValidIsland(grid, i, j, visited)
            if (score !== -1 && score%k === 0) islands += 1
            visited[i][j] = true
            console.log(score, i, j)
            console.table(visited)

        }
    }
    return islands
}

function checkValidIsland(grid: number[][], i: number, j: number, visited: boolean[][]): number {
    if (visited[i][j]) return -1
    if (grid[i][j] === 0) return -1
    let islandScore = 0
    let islandCheck = [[1, 0], [0, 1], [-1, 0], [0, -1]]
    let queue = [[i, j]]
    while (queue.length > 0) {
        let [a, b] = queue.shift()!
        if (visited[a][b]) continue
        islandScore += grid[a][b]
        for (let k of islandCheck) {
            visited[a][b] = true
            let newGrid = grid[a + k[0]] ? grid[a + k[0]][b + k[1]] : undefined
            if (newGrid && newGrid !== 0) {
                queue.push([a + k[0], b + k[1]])
            }
        }

    }

    return islandScore
}


const TestCases: any[] = [
    [[[0,2,1,0,0],[0,5,0,0,5],[0,0,1,0,0],[0,1,4,7,0],[0,2,0,0,8]], 5],
    [[[3,0,3,0], [0,3,0,3], [3,0,3,0]], 3]
]

const results: any[] = [2, 6]

runTestCases(TestCases, results, [], countIslands)