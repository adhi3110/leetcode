import {runTestCases} from "../../TesterFunction.ts";

function uniqueOccurrences(arr: number[]): boolean {
    let freq:{[key:number]: number} = {};
    for (let i = 0; i <arr.length; i++) {
        if(freq[arr[i]]) {
            freq[arr[i]] += 1;
        } else {
            freq[arr[i]] = 1;
        }
    }
    return new Set(Object.values(freq)).size === Object.keys(freq).length;
}

const TestCases: any[] = [
    [[1,2,2,1,1,3]],
    [[1,2]],
    [[-3,0,1,-3,1,1,1,-3,10,0]],
]

const results: any[] = [true, false, true]

runTestCases(TestCases, results, [], uniqueOccurrences)
