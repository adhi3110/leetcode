function rotateGrid(grid: number[][], k: number): number[][] {
    let n: number = grid.length;
    let m: number = grid[0].length;
    let nLayers: number = Math.min(Math.floor(m / 2), Math.floor(n / 2));

    for (let layer: number = 0; layer < nLayers; layer++) {
        let r: number[] = [];
        let c: number[] = [];
        let val: number[] = [];
        for (let i: number = layer; i < n - layer - 1; i++) {
            r.push(i)
            c.push(layer)
            val.push(grid[i][layer])
        }

        for (let j: number = layer; j < m - layer - 1; j++) {
            r.push(n - layer - 1);
            c.push(layer)
            val.push(grid[n - layer - 1][j])
        }
        for (let i: number = n - layer - 1; i >= layer; --i) {
            r.push(i)
            c.push(m - layer - 1)
            val.push(grid[i][m - layer - 1])
        }

        for (let j: number = m - layer - 1; j >= layer; j--) {
            r.push(layer);
            c.push(j)
            val.push(grid[layer][j])
        }

        for (let i: number = 0; i < val.length; i++) {
            grid[r[i]][c[i]] = val[(i + val.length - k) % val.length]
        }
    }

    return grid
}

rotateGrid([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]], 2)