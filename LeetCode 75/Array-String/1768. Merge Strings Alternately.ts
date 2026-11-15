import {runTestCases} from "../../TesterFunction.ts";

function mergeAlternately(word1: string, word2: string): string {
    let i = 0
    let j = 0
    let newWord = ""

    while(i< word1.length && j < word2.length) {
        newWord = newWord + word1[i++] + word2[j++]
    }

    if (word1[i]) newWord = newWord + word1.substring(i)
    if (word2[j]) newWord = newWord + word2.substring(j)

    return newWord
}

const TestCases: any[] = []

const results: any[] = []

runTestCases(TestCases, results, [], mergeAlternately)