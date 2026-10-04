// noinspection JSUnusedGlobalSymbols

function minDominoRotations(tops: string | any[], bottoms: any[]) {

    let res = getRot(tops, bottoms , tops[0])
    if (tops[0] != bottoms[0]) {
        res = Math.min(res, getRot(tops, bottoms, bottoms[0]))
    }

    return res === Number.POSITIVE_INFINITY ? -1 : res;

}

function getRot(tops: string | any[], bottoms: any[], target: any) {
    let rotateTop =  0
    let rotateBottom = 0

    for(let i =0 ; i< tops.length ; i++) {
        if (tops[i] != target && bottoms[i]  != target) {
            return Number.POSITIVE_INFINITY
        }

        tops[i] == target ? rotateTop++ : bottoms[i] != target ? rotateBottom++ : ""
    }

    return Math.min(rotateTop, rotateBottom)

}
