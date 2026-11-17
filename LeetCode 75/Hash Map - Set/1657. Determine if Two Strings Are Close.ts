import {runTestCases} from "../../TesterFunction.ts";

function closeStrings(word1: string, word2: string): boolean {
    if(word1.length !== word2.length) return false;

    let freq1 = new Array(26).fill(0)
    let freq2 = new Array(26).fill(0)

    for(let i =0 ; i<word1.length ; i++) {
        freq1[word1[i].charCodeAt(0)-97]++
        freq2[word2[i].charCodeAt(0)-97]++
    }

    for(let i =0 ; i<26 ; i++) {
        if(freq1[i] !== 0 && freq2[i] ===0) return false;
        if(freq2[i] !== 0 && freq1[i] ===0) return false;
    }

    for(let i =0 ; i<26 ; i++) {
        if(freq1[i]!==0) {
            for(let j = 0; j < 26; j++) {
                if(freq1[i] === freq2[j]) {
                    freq1[i] = 0
                    freq2[j] = 0
                    break;
                }
            }
        }
        if(freq1[i] !== 0) return false;
    }

    return true
}

const TestCases: any[] = [
    ["abc","bca"],
    ["a","aa"],
    ["cabbba","abbccc"],
]

const results: any[] = [true, false, true]

runTestCases(TestCases, results, [], closeStrings)
