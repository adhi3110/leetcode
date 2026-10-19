function generateParenthesis(n: number): string[] {
    let ans: string[] = []
    build("", n, n, ans)
    return ans
}

function build(str: string, open: number, close: number, ans: string[]) {
    if (close < open) return
    if (close === 0 && open === 0) {
        ans.push(str)
        return
    }
    if (open === 0 && close > 0) {
        build(str + ")", open, close - 1, ans)
    }
    if (open > 0 && close > 0) {
        build(str + "(", open - 1, close, ans)
        build(str + ")", open, close - 1, ans)
    }

}

console.log(generateParenthesis(2))