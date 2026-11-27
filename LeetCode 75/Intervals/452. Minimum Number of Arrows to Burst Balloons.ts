import {runTestCases} from "../../TesterFunction.ts";

function findMinArrowShots(points: number[][]): number {
    points.sort((a, b) => a[1] - b[1]);

    let arrows = 1;
    let arrowPos = points[0][1];

    for (const [start, end] of points) {
        if (start > arrowPos) {
            arrows++;
            arrowPos = end;
        }
    }

    return arrows;
}

const TestCases: any[] = [
    [[[10,16],[2,8],[1,6],[7,12]]],
    [[[1,2],[3,4],[5,6],[7,8]]],
    [[[1,2],[2,3],[3,4],[4,5]]],
]

const results: any[] = [2, 4, 2]

runTestCases(TestCases, results, [], findMinArrowShots)
