import {runTestCases} from "../../TesterFunction.ts";

function nearestExit(maze: string[][], entrance: number[]): number {
    let count = 0
    let dir = [[1, 0], [0,1] , [-1,0] , [0,-1]]
    const n = maze.length
    const m = maze[0].length
    maze[entrance[0]][entrance[1]] = "-"

    let queue = [entrance]
    let nextSteps: number[][] = []
    while(queue.length) {
        count++
        nextSteps = []
        for(const [r, c] of queue) {
            for(const [dx, dy] of dir) {
                let nc = c + dy
                let nr = r + dx
                if (nc < 0 || nr < 0 || nr >= n || nc >= m) continue
                if (maze[nr][nc] !== ".") continue

                if(nc === 0 || nr === 0 || nc === m-1 || nr === n-1) {
                    return count
                }

                maze[nr][nc] = "+"
                nextSteps.push([nr,nc])
            }
        }
        queue = nextSteps
    }
    return -1
}


const TestCases: any[] = [
    [[["+","+",".","+"],[".",".",".","+"],["+","+","+","."]],[1,2]],
    [[["+","+","+"],[".",".","."],["+","+","+"]],[1,0]],
    [[[".","+"]],[0,0]],
    [[
        ["+",".","+","+","+","+","+"],
        ["+",".","+",".",".",".","+"],
        ["+",".","+",".","+",".","+"],
        ["+",".",".",".",".",".","+"],
        ["+","+","+","+",".","+","."]
    ], [0,1]]

]

const results: any[] = [1, 2, -1, 7]

runTestCases(TestCases, results, [], nearestExit)
