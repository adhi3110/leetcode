import {runTestCases} from "../TesterFunction.ts";

function findMin(nums: number[]): number {
    let low = 0;
    let high = nums.length - 1

    let mid: number = Math.floor((high - low) / 2)

    while (low < high) {
        if (nums[low] < nums[high]) return nums[low];
        if (nums[mid] < nums[low]) high = mid
        if (nums[mid] > nums[high]) low = mid+1
        if (nums[mid] >= nums[low] && nums[mid] <= nums[high]) high = mid


        mid = Math.floor((high + low) / 2)
    }

    return nums[mid]

}

/** better solution
 *
 * @param nums
 */
function findMin2(nums: number[]): number {
    let low = 0;
    let high = nums.length - 1

    while (low < high) {
        let mid: number = Math.floor((high + low) / 2)
        if(nums[mid] > nums[high]) low = mid+1
        else high = mid
    }

    return nums[low]

}

const TestCases = [
    [[3,4,5,1,2]],
    [[4,5,6,7,0,1,2]]
]

const results = [1, 0]

runTestCases(TestCases, results, [], findMin)
runTestCases(TestCases, results, [], findMin2)