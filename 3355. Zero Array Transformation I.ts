function isZeroArray(nums: number[], queries: number[][]): boolean {
    const diff = new Array(nums.length + 1).fill(0);

    for (const [l, r] of queries) {
        diff[l] ++
        diff[r+1] --
    }

    const op = []

    let c = 0

    for(const i of diff) {
        c += i
        op.push(c)
    }

    for(let i = 0; i< nums.length; i++) {
        if (op[i] < nums[i])  return false
    }

    return true
}