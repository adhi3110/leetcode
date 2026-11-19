import {runTestCases} from "../../TesterFunction.ts";

class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


function oddEvenList(head: ListNode | null): ListNode | null {
    if(!head || !head.next) return head

    let o = head
    let e = head.next
    let evenHead = head.next
    let cur = e.next
    let isOdd = true
    while (cur !== null) {
        if (isOdd) {
            let next = cur.next
            o.next = cur
            o = cur
            cur.next = evenHead
            cur = next
            e.next = next
            isOdd = false
        } else {
            isOdd = true
            e = cur
            cur = cur.next

        }
    }

    return head
}

const TestCases: any[] = [
    [[1, 2, 3, 4, 5]],
    [[2, 1, 3, 5, 6, 4, 7]],
]

let x = [1, 2, 3, 4, 5].map((y) => new ListNode(y))

let head = x[0]
x[0].next = x[1]
x[1].next = x[2]
x[2].next = x[3]
x[3].next = x[4]
x[4].next = x[5]

console.log(head)
let y = oddEvenList(head)

console.log(y)
