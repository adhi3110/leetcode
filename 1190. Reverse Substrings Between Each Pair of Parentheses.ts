// noinspection SpellCheckingInspection

function reverseParentheses(s: string): string {
  let stack: string[] = []

  const reverse = () => {
    const reversed: string[] = []
    let ch = stack.pop()

    while (ch && ch !== "(") {
      reversed.push(ch);
      ch = stack.pop()
    }
    
    reversed.forEach(ch => stack.push(ch))
  }

  for (let i = 0; i < s.length; i++) {

    if (s[i] === ")")
      reverse()
    else
      stack.push(s[i])
  }
  return stack.join("")
}


console.log(reverseParentheses("asd"))
console.log(reverseParentheses("(abcd)"))
console.log(reverseParentheses("(u(love)i)"))
console.log(reverseParentheses("(ed(et(oc))el)"))