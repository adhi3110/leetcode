import {runTestCases} from "../../TesterFunction.ts";

function gcdOfStrings(str1: string, str2: string): string {
    if (str1 + str2 !== str2 + str1) return "";
    return str1.substring(0, str1.length > str2.length ? gcd(str1, str2): gcd(str2, str1))
}

function gcd(str1:string, str2:string) {
    let num1 = str1.length
    let num2 = str2.length
    let remainder = num1%num2

    while (remainder!==0) {
        num1 = num2
        num2 = remainder
        remainder = num1%num2
    }

    return num2
}

const TestCases: any[] = []

const results: any[] = []

runTestCases(TestCases, results, [], gcdOfStrings)