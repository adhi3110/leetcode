import {runTestCases} from "../../TesterFunction.ts";

function increasingTriplet(nums: number[]): boolean {
    let first = Infinity
    let second = Infinity

    for (let num of nums) {
        if(num <= first) {
            first = num
        } else if(num <= second) {
            second = num
        } else {
            return true
        }
    }

    return false
}


const TestCases: any[] = []

const results: any[] = []

runTestCases(TestCases, results, [], increasingTriplet)