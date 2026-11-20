import {TreeNode} from "../TreeNode.ts";

function maxDepth(root: TreeNode | null): number {
    if (root === null) return 0;

    return Math.max(maxDepth(root.left), maxDepth(root.right)) +1;

}

const TestCases: any[] = [
    [[3,9,20,null,null,15,7]],
    [[1,null,2]],
]

