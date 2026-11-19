import {runTestCases} from "../../TesterFunction.ts";


class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


function pairSum(head: ListNode): number {
    if(!head.next?.next) return head.val + (head.next?.val ?? 0)

    let head1 = head
    let head2 = reverseList(findMiddle(head))!
    let ans = 0

    while(head1 && head2) {
        ans = Math.max(ans, head1.val + head2.val)
        head1= head1.next!
        head2= head2.next!
    }

    return ans

}

function reverseList(head: ListNode | null): ListNode | null {
    let prev = null
    let current = head
    while (current !== null) {
        const next = current.next
        current.next = prev
        prev = current
        current = next
    }
    return prev
}

function findMiddle(head: ListNode | null): ListNode | null {
    if (!head?.next) return null

    let slow = head;
    let fast: ListNode | null = head
    let prev = null
    while (fast && fast.next) {
        fast = fast.next.next ?? null
        prev = slow
        slow = slow.next!
    }

    prev!.next = null

    return slow

}

const TestCases: any[] = [
    [[5, 4, 2, 1]],
    [[4, 2, 2, 3]],
    [[1, 100000]],
]

const results: any[] = [6, 7, 100001]

runTestCases(TestCases, results, [], pairSum)
