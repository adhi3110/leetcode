function longestValidParentheses(s: string): number {
    let res = 0;
    let A = [-1];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(')
            A.push(i);
        else {
            A.pop();

            if (!A.length)
                A.push(i);
            else
                { // @ts-ignore
                    res = Math.max(res, i - A.at(-1));
                }
        }
    }

    return res;
}



