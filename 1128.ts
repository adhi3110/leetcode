function numEquivDominoPairs(dominoes: number[][]): number {
    const res: {
        [key: string]: number
    } = {}

    let max = 0

    for(let i= 0; i< dominoes.length; i++) {
        let key = dominoes[i][0] > dominoes[i][1] ? ""+dominoes[i][1] + dominoes[i][0] :  ""+dominoes[i][0] + dominoes[i][1]
        res[key] ? res[key] ++ : res[key]  = 1
    }
    let sum = 0

    Object.keys(res).forEach(key => {
        sum += res[key] * (res[key]-1) *.5
    })

    return sum

}



numEquivDominoPairs([[1,2],[2,1],[3,4],[5,6]])

