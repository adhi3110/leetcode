const MEM = [0,1,1]
function tribonacci(n: number): number {
    if (n < 0) {
        return 0;
    }
    if (MEM[n] == null) {
        let val = tribonacci(n-3);
        val += tribonacci(n-2);
        MEM[n] = val + tribonacci(n-1);
    }
    return MEM[n];
}
