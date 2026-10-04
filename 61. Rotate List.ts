// noinspection SpellCheckingInspection

class ListNode {
  val: number
  next: ListNode | null

  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }

  static createList(a:number[]) {
    let listnodes = a.map((x => new ListNode(x)))
    for(let i = 0; i< a.length-1;i++) {
      listnodes[i].next = listnodes[i+1]
    }
    return listnodes[0]
  }

  print(): string {
    if(this.next) {
      return this.val + " " + this.next.print()
    }

    return this.val + ""
  }
}


function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if(!head) return head
  if(k===0) return head

  let length = 1
  let last = head
  while (last.next != null) {
    last = last.next;
    length++;
  }

  k = k % length
  k = length-k-1

  last.next = head

  while (k > 0) {
    // @ts-ignore
    head = head.next;
    k--
  }

  let cur = head
  // @ts-ignore
  head = head.next
  // @ts-ignore
  cur.next = null

  return head;
}


console.log(rotateRight(ListNode.createList([1,2,3,4,5]), 2)?.print())
console.log(rotateRight(ListNode.createList([0,1,2]), 4)?.print())



