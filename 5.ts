// 5. Longest Palindromic Substring

function longestPalindrome(s: string): string {

    let ans: string = "";

    for (let i = 0; i < s.length; i++) {
        let odd: string = expand(i, i, s);
        if (odd.length > ans.length) {
            ans = odd;
        }
        let even: string = expand(i, i + 1, s);
        if (even.length > ans.length) {
            ans = even;
        }
    }

    return ans;
}

function expand(i: number, j: number, s: string): string {
    let left: number = i;
    let right: number = j;

    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }

    return s.slice(left + 1, right);
}
