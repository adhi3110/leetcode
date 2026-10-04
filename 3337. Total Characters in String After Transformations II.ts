// noinspection SpellCheckingInspection

function lengthAfterTransformations(s: string, t: number, nums: number[]): number {
    const MOD = 1000000007;

    let cnt: number[] = new Array(26).fill(0);

    for (const ch of s) {
        cnt[ch.charCodeAt(0) - "a".charCodeAt(0)]++;
    }

    for (let round = 0; round < t; round++) {
        let nxt: number[] = new Array(26).fill(0);

        for(let i = 0; i < 26; i++) {
            for(let j = 1; j <= nums[i] ; j++) {
                nxt[i+j] = (nxt[i] + cnt[i]) % MOD;
            }
        }

        cnt = nxt
    }

    let ans = 0;

    for (let i = 0; i < 26; i++) {
        ans = (ans + cnt[i]) % MOD;
    }
    return ans;
}

lengthAfterTransformations("abcyy", 2, [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2])