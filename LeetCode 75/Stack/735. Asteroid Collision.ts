import {runTestCases} from "../../TesterFunction.ts";

function asteroidCollision(asteroids: number[]): number[] {
    let stack = []
    for(let asteroid of asteroids) {

        if(!stack.length) {
            stack.push(asteroid)
            continue
        }

        if(asteroid > 0) {
            stack.push(asteroid)
            continue
        }

        if(stack[stack.length-1] < 0) {
            stack.push(asteroid)
            continue
        }

        if(stack[stack.length-1] > 0) {
            while(true) {
                let x: number | undefined = stack.pop();
                if(!x) {
                    stack.push(asteroid)
                    break;
                }

                if(x<0) {
                    stack.push(x)
                    stack.push(asteroid)
                    break
                }

                if(asteroid*-1 === x) {
                    break;
                }

                if(asteroid*-1 < x) {
                    stack.push(x)
                    break;
                }
            }

        }
    }

    return stack
}

const TestCases: any[] = [
    [[5,10,-5]],
    [[8,-8]],
    [[10,2,-5]],
    [[3,5,-6,2,-1,4]],
    [[-2,-1,1,2]],
    [[-2,-2,1,-2]]
]

const results: any[] = [[5,10], [], [10], [-6,2,4],[-2,-1,1,2],[-2,-2,-2]]

runTestCases(TestCases, results, [], asteroidCollision)
