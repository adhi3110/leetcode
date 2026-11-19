import {runTestCases} from "../../TesterFunction.ts";


class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


function deleteMiddle(head: ListNode | null): ListNode | null {
    if(!head?.next) return null

    let slow = head;
    let fast: ListNode | null = head
    let prev = null
    while(fast && fast.next) {
        fast = fast.next.next ?? null
        prev = slow
        slow = slow.next!
    }

    prev!.next = slow.next;


    return head

}

const TestCases: any[] = [
    [[1, 3, 4, 7, 1, 2, 6]],
    [[1, 2, 3, 4]],
    [[2, 1]],
]

const results: any[] = [[1, 3, 4, 1, 2, 6], [1, 2, 4], [2]]

runTestCases(TestCases, results, [], deleteMiddle)
