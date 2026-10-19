function scoreOfParentheses(s: string): number {
    let stack = [0]

    for(let i of s) {
        if (i === "(") {
            stack.push(0)
        } else {
            let v = stack.pop()
            let w = stack.pop()
            stack.push((w || 0) + Math.max(2*(v || 0) , 1))
        }
    }

    return stack.pop()!
}

console.log(scoreOfParentheses("()"))
console.log(scoreOfParentheses("()()"))
console.log(scoreOfParentheses("((()))"))
console.log(scoreOfParentheses("(()(()))"))