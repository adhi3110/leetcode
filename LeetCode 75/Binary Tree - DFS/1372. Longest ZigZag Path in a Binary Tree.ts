
import {TreeNode} from "../TreeNode.ts";


function lzz(root: TreeNode, isRight:boolean, count: number) : number{
    if(root.left === null && root.right === null) return count

    let c1 = 0;
    let c2 = 0

    if(isRight) {
        if(root.left) {
            c1 = lzz(root.left, false, count+1)
        }
        if(root.right) {
            c2 = lzz(root.right, true, 1)
        }
    } else {
        if(root.left) {
            c1 = lzz(root.left, false, 1)
        }
        if(root.right) {
            c2 = lzz(root.right, true, count +1)
        }
    }

    return Math.max(c1, c2);
}

function longestZigZag(root: TreeNode | null): number {
    if(!root) return 0;
    return lzz(root,true, 1)
}



