function getLongestSubsequence(words: string[], groups: number[]): string[] {
    const a = []
    for (let i = 0; i < words.length ; i++) {
        if (!i || groups[i] != groups[i - 1]) {
            a.push(words[i])
        }
    }
    return a
}