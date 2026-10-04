function minSum(nums1: number[], nums2: number[]): number {
    let sum1 = 0
    let sum2 = 0

    let zero1 = 0
    let zero2 = 0

    for (let i = 0; i < nums1.length; i++) {
        if (nums1[i] === 0) {
            zero1++
        } else {
            sum1 += nums1[i]
        }
    }

    for (let i = 0; i < nums2.length; i++) {
        if (nums2[i] === 0) {
            zero2++
        } else {
            sum2 += nums2[i]
        }
    }

    if (!zero1 && !zero2) {
        if (sum1 === sum2) {
            return sum1
        } else {
            return -1
        }
    }

    if (!zero1) {
        if (sum1 < (sum2 + zero2)) {
            return -1
        } else {
            return sum1
        }
    }

    if (!zero2) {
        if (sum2 < (sum1 + zero1)) {
            return -1
        }
        else {
            return sum2
        }
    }

    return Math.max(sum1+zero1, + sum2 + zero2);
}

minSum([3, 2, 0, 1, 0], [6, 5, 0])