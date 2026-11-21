import {runTestCases} from "../../TesterFunction.ts";

function canVisitAllRooms(rooms: number[][]): boolean {
    const visited = new Array(rooms.length).fill(false);

    let queue = [0]

    while(queue.length > 0) {
        let roomNumber = queue.shift()!; /** use pop instead of shift as shift is O(n) and pop i O(1) */
        if (!visited[roomNumber]) {
            queue.push(...rooms[roomNumber])
            visited[roomNumber] = true;
        }

        /** keep visited count so you cna return as soon as all rooms are visited */
    }
    /** keep visited count so you cna return as soon as all rooms are visited */
    return visited.every((item) => item)
}

const TestCases: any[] = [
    [[[1],[2],[3],[]]],
    [[[1,3],[3,0,1],[2],[0]]],
]

const results: any[] = [true, false]

runTestCases(TestCases, results, [], canVisitAllRooms)
