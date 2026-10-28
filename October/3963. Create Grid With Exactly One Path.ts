function createGrid(m: number, n: number): string[] {
    let res = []
    res.push(new Array(n).fill(".").join(""))
    let f = new Array(n-1).fill("#").join("") + "."
    for (let i = 1; i < m; i++) {
        res.push(f)
    }
    return res
}