import {runTestCases} from "../../TesterFunction.ts";

function decodeString(s: string): string {
    let res = []

    for(let i = 0; i< s.length ; i++) {
        if(+s[i]) {
            let initIndex = i
            while (true) {
                if(s[++i] === "[") break
            }
            res.push(s.slice(initIndex, i))
            i--
        } else if (s[i] === "]") {
            let repeatString = ""
            while(true) {
                let x = res.pop()!
                if(x === "[") break
                repeatString = x + repeatString
            }
            let x:string = res.pop()!
            res.push(repeatString.repeat(+x))

        } else {
            res.push(s[i])
        }
    }
    return res.join("")
}

const TestCases: any[] = [
    ["3[a]2[bc]"],
    ["3[a2[c]]"],
    ["2[abc]3[cd]ef"],
]

const results: any[] = ["aaabcbc", "accaccacc", "abcabccdcdcdef"]

runTestCases(TestCases, results, [], decodeString)
