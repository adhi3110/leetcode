import {runTestCases} from "../../TesterFunction.ts";

function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    let max = Math.max(...candies)
    return candies.map((x) => x+extraCandies >= max)
}

const TestCases: any[] = []

const results: any[] = []

runTestCases(TestCases, results, [], kidsWithCandies)