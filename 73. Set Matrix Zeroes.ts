/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
    let rows = new Set<number>()
    let cols = new Set<number>()

    let r = matrix.length
    let c = matrix[0].length

    for(let i =0 ; i< matrix.length; i++) {
        for (let j =0 ; j< matrix[i].length; j++) {
            if (matrix[i][j] == 0) {
                rows.add(i)
                cols.add(j)
            }
        }
    }

    for(let i of rows) {
        matrix[i] = new Array(c).fill(0)
    }

    for(let i of cols) {
        for(let j =0 ; j< r; j++) {
            matrix[j][i] = 0
        }
    }

}

setZeroes([[1,1,1],[1,0,1],[1,1,1]])