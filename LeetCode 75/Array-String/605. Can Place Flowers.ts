import {runTestCases} from "../../TesterFunction.ts";

function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    if(flowerbed.length === 1 && flowerbed[0] === 0 && n === 1) return true

    for(let i = 0; i < flowerbed.length; i++) {
        if(flowerbed[i] === 0) {
            if(i === 0) {
                if(flowerbed[i+1] === 0) {
                    n--
                    flowerbed[i] = 1
                }
            } else if(i === flowerbed.length-1) {
                if(flowerbed[i-1] === 0){
                    n--
                    flowerbed[i] = 1
                }
            } else if(flowerbed[i-1] === 0 && flowerbed[i+1] === 0) {
                n--
                flowerbed[i] = 1
            }
        }
        if(n<=0) return true
    }

    return false
}


const TestCases: any[] = [
    [[0,0,0] , 2]
]

const results: any[] = [true]

runTestCases(TestCases, results, [], canPlaceFlowers)