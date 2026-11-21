import {runTestCases} from "../../TesterFunction.ts";

function findCircleNum(isConnected: number[][]): number {
    let visited = new Uint8Array(isConnected.length).fill(0);
    let count = 0

    for(let i = 0; i < isConnected.length; i++) {
        if(visited[i] === 1) continue

        visited[i] = 1
        count ++
        let queue = [i]

        while(queue.length > 0) {
            let n = queue.pop()!
            visited[n] = 1;
            for(let j = 0; j< isConnected.length; j++) {
                if(isConnected[n][j] === 1 && !visited[j]) queue.push(j)
            }
        }

    }

    return count
}

const TestCases: any[] = [
    [[[1,1,0],[1,1,0],[0,0,1]]],
    [[[1,0,0],[0,1,0],[0,0,1]]],
]

const results: any[] = [2, 3]

runTestCases(TestCases, results, [], findCircleNum)
