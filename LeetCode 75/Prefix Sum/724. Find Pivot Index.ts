import {runTestCases} from "../../TesterFunction.ts";

    function pivotIndex(nums: number[]): number {
        let k = nums.length;
        let psrs = new Array(k);
        let psls = new Array(k)
        let psr = 0
        let psl = 0
        for (let i = 0; i < k; i++) {
            psrs[i] = psr
            psr += nums[i]

            psls[k-1-i] = psl
            psl += nums[k-1-i]

        }

        for (let j = 0; j < k; j++) if(psrs[j] === psls[j]) return j
        return -1
    }

const TestCases: any[] = [
    [[1,7,3,6,5,6]],
    [[1,2,3]],
    [[2,1,-1]],
]

const results: any[] = [3, -1, 0]

runTestCases(TestCases, results, [], pivotIndex)
