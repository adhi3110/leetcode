import {runTestCases} from "../../TesterFunction.ts";

function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {
    let calcMatrix: { [key in string]: { [key in string]: number } } = {}

    for (let i = 0; i < equations.length; i++) {
        let eq = equations[i];
        if (!calcMatrix[eq[0]]) {
            calcMatrix[eq[0]] = {}
            calcMatrix[eq[0]][eq[0]] = 1
        }
        if (!calcMatrix[eq[1]]) {
            calcMatrix[eq[1]] = {}
            calcMatrix[eq[1]][eq[1]] = 1
        }
        calcMatrix[eq[0]][eq[1]] = values[i]
        calcMatrix[eq[1]][eq[0]] = 1 / values[i]
    }


    function solve(a: string, b: string, visited: { [key in string]: boolean }): number {
        if (!calcMatrix[a] || !calcMatrix[b]) return -1
        if (calcMatrix[a][b]) return calcMatrix[a][b]
        if (a == b) return 1

        visited[a] = true

        for (let i of Object.keys(calcMatrix[a])) {
            if (visited[i]) continue
            visited[i] = true
            let sol = solve(i, b, visited)
            if(sol ===-1) continue
            calcMatrix[a][b] = sol * calcMatrix[a][i]
            calcMatrix[b][a] = 1 / calcMatrix[a][b]

            return calcMatrix[a][b]
        }

        return  -1
    }


    let ans: number[] = []
    for (let i of queries) {
        ans.push(solve(i[0], i[1], {}))
    }

    return ans
}

const TestCases: any[] = [
    [[["a","b"],["c","d"],["e","f"],["g","h"]], [4.5,2.3,8.9,0.44], [["a","c"],["d","f"],["h","e"],["b","e"],["d","h"],["g","f"],["c","g"]]],
    [[["a", "b"], ["b", "c"]], [2, 3], [["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"]]],
    [[["a", "b"], ["b", "c"], ["bc", "cd"]], [1.5, 2.5, 5], [["a", "c"], ["c", "b"], ["c", "cd"], ["cd", "bc"]]],
    [[["a", "b"]], [0.5], [["a", "b"], ["b", "a"], ["a", "c"], ["x", "y"]]],
    [[["x1", "x2"], ["x2", "x3"], ["x1", "x4"], ["x2", "x5"]], [3.0, 0.5, 3.4, 5.6], [["x2", "x4"], ["x1", "x5"], ["x1", "x3"], ["x5", "x5"], ["x5", "x1"], ["x3", "x4"], ["x4", "x3"], ["x6", "x6"], ["x0", "x0"]]],
    [[["a","b"],["a","c"],["d","e"],["d","f"],["a","d"],["aa","bb"],["aa","cc"],["dd","ee"],["dd","ff"],["aa","dd"],["a","aa"]],[2.0,3.0,4.0,5.0,7.0,5.0,8.0,9.0,3.0,2.0,2.0],[["ff","a"]]],
]

const results: any[] = [
    [-1.00000,-1.00000,-1.00000,-1.00000,-1.00000,-1.00000,-1.00000],
    [6, 0.5, -1, 1, -1],
    [3.75, 0.4, -1, 0.2],
    [0.5, 2, -1, -1],
    [1.13333, 16.80000, 1.50000, 1.00000, 0.05952, 2.26667, 0.44118, -1.00000, -1.00000],
    [0.83333]
]

runTestCases(TestCases, results, [], calcEquation)
