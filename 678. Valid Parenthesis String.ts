function checkValidString(s: string): boolean {
    let op = []
    let as = []

    for(let i =0; i< s.length; ++i) {
        if(s[i] === "(") op.push(i)
        if(s[i] === "*") as.push(i)
        if(s[i] === ")") {
            if (op.length) {
                op.pop()
            } else if(as.length) {
                as.pop()
            } else {
                return false
            }
        }
    }

    if(op.length === 0) return true;
    if(as.length < op.length) return false;

    while(op.length) {
        let asi = as.pop()
        let opi = op.pop()
        if(asi!==undefined && opi!==undefined && asi < opi) {
            return false
        }
    }
    return true
}

console.log(checkValidString("((((()(()()()*()(((((*)()*(**(())))))(())()())(((())())())))))))(((((())*)))()))(()((*()*(*)))(*)()"))
console.log(checkValidString("(((((*(()((((*((**(((()()*)()()()*((((**)())*)*)))))))(())(()))())((*()()(((()((()*(())*(()**)()(())"))
