import {TreeNode} from "../TreeNode.ts";


function goodNodes(root: TreeNode | null): number {

    if (!root) return 0;

    let count = 0;

    function gn(rootNode: TreeNode, max: number) {
        if(rootNode.val >= max) count++;
        rootNode.left && gn(rootNode.left, Math.max(max, rootNode.val));
        rootNode.right && gn(rootNode.right, Math.max(max, rootNode.val));
    }

    gn(root, root.val)

    return count;


}

