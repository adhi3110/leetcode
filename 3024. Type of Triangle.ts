function triangleType(nums: number[]): string {
    const a = nums[0]
    const b = nums[1]
    const c = nums[2]

    if (a=== b && b === c ) {
        return "equilateral"
    }

    if ((a + b) <= c || (a + c) <= b || (c + b) <= a) {
        return "none"
    }

    if (a == b || a == c || b == c) {
        return "isosceles"
    }

    return "scalene"
}