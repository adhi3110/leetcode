function isValid(s: string): boolean {
  let stack:string[] = []
  for(let c of s) {
    if (["(","{","["].includes(c)) {
      stack.push(c)
    } else {
      const closing = stack.pop()
      if(!closing) return false
      if(closing === "(" && c !==")") return false
      if(closing === "{" && c !=="}") return false
      if(closing === "[" && c !=="]") return false
    }
  }
  return stack.length === 0
}