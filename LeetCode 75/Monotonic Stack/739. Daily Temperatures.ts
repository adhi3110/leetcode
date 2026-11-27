import {runTestCases} from "../../TesterFunction.ts";

function dailyTemperatures(temperatures: number[]): number[] {
    let monoStack: number[][] = []
    let ans: number[] = new Array(temperatures.length).fill(0);

    for (let i = 0; i < temperatures.length; i++) {
        let temp = temperatures[i]

        if (!monoStack.length) {
            monoStack.push([temp, i])
            continue;
        }

        while (monoStack.length) {
            let lastStack = monoStack.pop()!
            if (lastStack[1] === i) {
                monoStack.push(lastStack)
                break
            }
            if (lastStack[0] >= temp) {
                monoStack.push(lastStack)
                monoStack.push([temp, i])
                break
            }
            ans[lastStack[1]] = i - lastStack[1]

            if (!monoStack.length) {
                monoStack.push([temp, i])
                break
            }
        }
    }

    return ans;
}


const TestCases: any[] = [
    [[73, 74, 75, 71, 69, 72, 76, 73]],
    [[30, 40, 50, 60]],
    [[30, 60, 90]],
]

const results: any[] = [[1, 1, 4, 2, 1, 1, 0, 0], [1, 1, 1, 0], [1, 1, 0]]

runTestCases(TestCases, results, [], dailyTemperatures)
