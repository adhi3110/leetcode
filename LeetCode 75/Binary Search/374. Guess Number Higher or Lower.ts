import {runTestCases} from "../../TesterFunction.ts";

/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

var picked = 0

function guessNumber(n: number, picked : number): number {
    picked = picked
    let s = 1;
    let e = n;

    while (s <= e) {
        let mid = s + Math.floor((e-s)/2)
        let x = guess(mid)
        if(x === 1) {
            s = mid + 1
        } else if (x === -1) {
            e = mid
        } else {
            return mid
        }
    }

    return -1
}

const guess = (n: number): -1 | 1 | 0 => {
    if(6 == n) return 0
    if(6 > n) return 1
    if(6 < n) return -1
    return -1
}

const TestCases: any[] = [
    [10,6],
    [1,1],
    [2,1],
]

const results: any[] = [6, 1, 1]

runTestCases(TestCases, results, [], guessNumber)
