function minAddToMakeValid(s: string): number {
    let bal = 0;
    let res = 0;

    /**
     *  if opening bracket we require closed bracket so to count number of closed brackets require add balance as 1
     *
     *  if closing bracket we deduct balance and if balance is negative we need more opening brackets
     */
    for(let i of s) {
        if(i === "(") bal++
        else bal--

        if(bal<0) {
            res++
            bal++
        }
    }
    return bal + res
}