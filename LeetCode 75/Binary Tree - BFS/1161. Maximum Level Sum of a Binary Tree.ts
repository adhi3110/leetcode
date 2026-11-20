import {buildTree, TreeNode} from "../TreeNode.ts";


function maxLevelSum(root: TreeNode | null): number {
    let levels: number[] = []

    function bfs(root: TreeNode | null, level: number) {
        if (!root) return

        if (levels[level]) {
            levels[level] += root.val
        } else {
            levels.push(root.val);
        }
        bfs(root.left, level + 1);
        bfs(root.right, level + 1);
    }

    bfs(root, 0)
    let max  = -Infinity
    let maxIndex = -1
    for(let i =0; i< levels.length; i++) {
        if(levels[i] > max) {
            max = levels[i]
            maxIndex = i
        }
    }

    return maxIndex+1
}

let r = buildTree([989,null,10250,98693,-89388,null,null,null,-32127])

maxLevelSum(r)