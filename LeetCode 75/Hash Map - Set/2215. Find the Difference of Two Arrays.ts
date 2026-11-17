import {runTestCases} from "../../TesterFunction.ts";

function findDifference(nums1: number[], nums2: number[]): number[][] {
    let set1 = new Set<number>(nums1);
    let set2 = new Set<number>(nums2);
    let answer: number[][] = []

    answer.push(Array.from(new Set(nums1.filter(x => !set2.has(x)))))
    answer.push(Array.from(new Set(nums2.filter(x => !set1.has(x)))))

    return answer;
}

const TestCases: any[] = [
    [[1,2,3],[2,4,6]],
    [[1,2,3,3],[1,1,2,2]],
]

const results: any[] = [[[1,3],[4,6]], [[3],[]]]

runTestCases(TestCases, results, [], findDifference)
