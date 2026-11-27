class StockSpanner {
    stack:number[] = []
    stackIndex:number[] = []
    constructor() {}

    next(price: number): number {
        if(!this.stack.length){
            this.stack.push(price)
            this.stackIndex.push(1)
            return 1
        }
        let count = 1
        while(this.stack.length && this.stack[this.stack.length-1] <= price) {
            count += this.stackIndex.pop()!
            this.stack.pop()
        }
        this.stack.push(price)
        this.stackIndex.push(count)
        return count
    }
}

var stockSpanner = new StockSpanner();
console.log(stockSpanner.next(100)); // return 1
console.log(stockSpanner.next(80));  // return 1
console.log(stockSpanner.next(60));  // return 1
console.log(stockSpanner.next(70));  // return 2
console.log(stockSpanner.next(60));  // return 1
console.log(stockSpanner.next(75));  // return 4, because the last 4 prices (including today's price of 75) were less than or equal to today's price.
console.log(stockSpanner.next(85));  // return 6