import {TreeNode} from "../TreeNode.ts";

function getLeaves(root: TreeNode, ans: number[] = []) {
    if (root.left === null && root.right === null) {
        ans.push(root.val)
    }
    root.left && getLeaves(root.left, ans);
    root.right && getLeaves(root.right, ans);
}


function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
    if (root1 === null && root2 === null) return true;
    if (root1 === null || root2 === null) return false
    let ans1: number[] = []
    let ans2: number[] = []
    getLeaves(root1, ans1);
    getLeaves(root2, ans2);
    return JSON.stringify(ans1) === JSON.stringify(ans2);
}
