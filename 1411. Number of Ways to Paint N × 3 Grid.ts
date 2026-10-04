/**
 * you have 2 possible patterns
 *
 * 121 and 123
 *
 * a121 => 121 131 212 232 323 313
 * a123 => 123 231 312 132 213 321
 *
 * b121 => 212 232 313 312 213 => a121 * 3 + a121 *2
 * b123 => 212 232 312 231 => a121 * 2  + a121 *2
*/

function numOfWays(n: number): number {
    let a1 = 6
    let a2 = 6
    let i = 1

    while (i < n) {
        let b1 = (a1*3+a2*2)%1000000007
        let b2 = (a1*2+a2*2)%1000000007
        a1 = b1
        a2 = b2
        i++
    }

    return (a1+a2)%1000000007

}