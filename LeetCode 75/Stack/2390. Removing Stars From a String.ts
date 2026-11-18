import {runTestCases} from "../../TesterFunction.ts";

function removeStars(s: string): string {
    let stack = []
    for(let i of s.split("")) {
        if(i != "*") stack.push(i)
        else stack.pop()
    }
    return stack.join("");
}

const TestCases: any[] = [
    ["leet**cod*e"],
    ["erase*****"],
]

const results: any[] = ["lecoe", ""]

runTestCases(TestCases, results, [], removeStars)
