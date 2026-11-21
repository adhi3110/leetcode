import {runTestCases} from "../../TesterFunction.ts";

function orangesRotting(grid: number[][]): number {
    const rows = grid.length;
    const cols = grid[0].length;
    const dir = [[1, 0], [0, 1], [-1, 0], [0, -1]];

    let totalOranges = 0


    let queue: number[][] = [/** add all rotting orange */];

    for(let i=0; i< rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 2) queue.push([i, j])
            if (grid[i][j] === 1) totalOranges++
        }
    }

    if(!queue.length) return totalOranges ? -1 : 0

    let count = 0;
    let nextSteps: number[][] = []
    while(queue.length) {
        count++
        nextSteps = []
        for(const [r, c] of queue) {
            for(const [dx, dy] of dir) {
                let nr = r + dx
                let nc = c + dy
                if (nc < 0 || nr < 0 || nr >= rows || nc >= cols) continue

                if(grid[nr][nc] === 1) {
                    totalOranges--
                    grid[nr][nc] = 2
                    nextSteps.push([nr,nc])
                }
            }
        }
        queue = nextSteps
    }

    return totalOranges > 0 ? -1 : count-1
}


const TestCases: any[] = [
    [[[2,1,1],[1,1,0],[0,1,1]]],
    [[[2,1,1],[0,1,1],[1,0,1]]],
    [[[0,2]]],
]

const results: any[] = [4, -1, 0]

runTestCases(TestCases, results, [], orangesRotting)
