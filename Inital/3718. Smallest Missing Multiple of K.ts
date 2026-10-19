function missingMultiple(nums: number[], k: number): number {
    const s = new Set(nums)
    let i = 1
    while(true) {
        if(!s.has(i*k)) return i*k
        i++
    }
}