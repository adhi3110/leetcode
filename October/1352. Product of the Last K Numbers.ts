class ProductOfNumbers {
    arr = new Array<number>();
    prefixArr: number[] = new Array<number>()
    index = 0

    add(num: number): void {
        if(num === 0) {
            this.arr = []
            this.prefixArr = [];
            this.index = 0
            return
        }

        this.arr.push(num);
        this.prefixArr.push(num * (this.index ? this.prefixArr[this.index-1]: 1));
        this.index++
    }

    getProduct(k: number): number {
        if(this.arr.length < k) return 0
        if(this.arr.length === k) return this.prefixArr[this.index-1]
        return this.prefixArr[this.index-1] / this.prefixArr[this.index-k-1]
    }
}

const productOfNumbers = new ProductOfNumbers();
productOfNumbers.add(3);        // [3]
productOfNumbers.add(0);        // [3,0]
productOfNumbers.add(2);        // [3,0,2]
productOfNumbers.add(5);        // [3,0,2,5]
productOfNumbers.add(4);        // [3,0,2,5,4]
console.log(productOfNumbers.getProduct(2)); // return 20. The product of the last 2 numbers is 5 * 4 = 20
console.log(productOfNumbers.getProduct(3)); // return 40. The product of the last 3 numbers is 2 * 5 * 4 = 40
console.log(productOfNumbers.getProduct(4)); // return 0. The product of the last 4 numbers is 0 * 2 * 5 * 4 = 0
productOfNumbers.add(8);        // [3,0,2,5,4,8]
console.log(productOfNumbers.getProduct(2)); // return 32. The product of the last 2 numbers is 4 * 8 = 32

