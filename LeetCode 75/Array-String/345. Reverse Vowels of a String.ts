import {runTestCases} from "../../TesterFunction.ts";

function reverseVowels(s: string): string {
    let st = 0
    let en = s.length-1

    const wow = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

    while (st < en) {
        if(wow.indexOf(s[st]) == -1) {
            st ++ ;
        } else if(wow.indexOf(s[en]) == -1) {
            en -- ;
        } else {
            s = s.substring(0,st) + s[en] + s.substring(st+1, en) + s[st] + s.substring(en+1)
            st++
            en--
        }
    }

    return s

}


const TestCases: any[] = []

const results: any[] = []

runTestCases(TestCases, results, [], reverseVowels)