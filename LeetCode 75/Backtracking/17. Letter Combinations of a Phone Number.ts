import {runTestCases} from "../../TesterFunction.ts";

function letterCombinations(digits: string): string[] {
    let digitMap: Map<string, string> = new Map<string, string>();
    digitMap.set("2" , "abc")
    digitMap.set("3" , "def")
    digitMap.set("4" , "ghi")
    digitMap.set("5" , "jkl")
    digitMap.set("6" , "mno")
    digitMap.set("7" , "pqrs")
    digitMap.set("8" , "tuv")
    digitMap.set("9" , "wxyz")

    function addDigit(digits: string, initString: string, ans: string[]) {
        if (!digits.length && initString) {
            ans.push(initString);
            return
        }

        let s = digitMap.get(digits[0])!.split("")
        s.forEach((s) => addDigit(digits.slice(1), initString + s, ans))
    }

    let ans:string[] = []

    addDigit(digits, "", ans)
    return ans
}

const TestCases: any[] = [
    ["23"],
    ["2"],
]

const results: any[] = [["ad","ae","af","bd","be","bf","cd","ce","cf"], ["a","b","c"]]

runTestCases(TestCases, results, [], letterCombinations)
