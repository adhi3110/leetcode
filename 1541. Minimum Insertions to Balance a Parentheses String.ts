import {runTestCases} from "./TesterFunction.ts";

function minInsertions(s: string): number {
    let count = 0;
    let balance = 0;

    let i = 0;
    while (i < s.length) {
        if (s[i] == "(") {
            balance++
        }

        if (s[i] == ")") {
            if (s[i + 1] === ")") {
                i++
            } else {
                count++;
            }
            balance--
        }

        if (balance < 0) {
            count++;
            balance++
        }
        i++
    }

    if (balance > 0) count += balance*2

    return count;
}

const Testcases = [
    ["(()))"],
    ["())"],
    ["))())("]
]

const results = [1, 0, 3]

minInsertions("(()))")

runTestCases(Testcases, results, [], minInsertions)