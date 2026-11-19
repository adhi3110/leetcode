import {runTestCases} from "../../TesterFunction.ts";

class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


function reverseList(head: ListNode | null): ListNode | null {
    let prev = null
    let current = head
    while(current !== null) {
        const next = current.next
        current.next = prev
        prev = current
        current = next
    }
    return prev
}

const TestCases: any[] = [
    [[1, 2, 3, 4, 5]],
    [[1, 2]],
    [[]],
]

const results: any[] = [[5, 4, 3, 2, 1], [2, 1], []]

runTestCases(TestCases, results, [], reverseList)
