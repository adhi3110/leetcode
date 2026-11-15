import {runTestCases} from "../../TesterFunction.ts";

function compress(chars: string[]): number {
    let length = 0

    for (let i = 0; i < chars.length; i++) {
        let char = chars[i]
        if (char === chars[i + 1]) {
            let curChar = chars[i]
            let c = 0
            while (curChar === chars[i]) {
                c++
                i++
            }
            --i;
            chars[length] = curChar
            length++
            let cs = ("" + c).split("")
            for (let csc of cs) chars[length++] = csc
        } else {
            chars[length++] = chars[i]
        }
    }
    return length
}

const TestCases: any[] = [
    [["a", "a", "b", "b", "c", "c", "c"]],
    [["a"]],
    [["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]]
]

const results: any[] = [
    6,
    1,
    4
]

runTestCases(TestCases, results, [], compress)