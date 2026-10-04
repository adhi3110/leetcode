function rotateTheBox(boxGrid: string[][]): string[][] {
  const res: string[][] = []

  for (let i = 0; i < boxGrid[0].length; i++) {
    res.push([])
    for (let j = 0; j < boxGrid.length; j++) {
      res[i].push(boxGrid[boxGrid.length - 1 - j][i])
    }
  }

  for (let i = 0; i < res[0].length; i++) {
    let base = res.length
    for (let j = res.length - 1; j >= 0; j--) {
      if (res[j][i] === '#') {
        if (base !== j) {
          res[j][i] = "."
          res[base - 1][i] = "#"
          base--
        }
      }
      if (res[j][i] === '*') {
        base = j
      }
      if (res[j][i] === ".") {

      }
    }
  }

  return res
}

rotateTheBox([["#", ".", "#"]])
rotateTheBox([
  ["#", ".", "*", "."],
  ["#", "#", "*", "."]
])

rotateTheBox([
  ["#", "#", "*", ".", "*", "."],
  ["#", "#", "#", "*", ".", "."],
  ["#", "#", "#", ".", "#", "."]
])
