import {TreeNode} from "../TreeNode.ts";

function rightSideView(root: TreeNode | null): number[] {
    let levels: number[] = []
    let queue: {
        node: TreeNode | null;
        level: number;
    }[] = []

    function bfs(root: TreeNode | null, level: number) {
        if(!root) return

        if(levels.length >= level) {
            levels[level] = root.val
        } else {
            levels.push(level);
        }
        bfs(root.left, level + 1);
        bfs(root.right, level + 1);
    }
    bfs(root, 0)
    return levels
}

