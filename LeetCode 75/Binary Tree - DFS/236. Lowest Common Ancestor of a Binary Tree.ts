import {buildTree, TreeNode} from "../TreeNode.ts";

function findPath(root: TreeNode, q: TreeNode, path: TreeNode[]) {
    if (q === root) {
        path.push(root);
        return;
    }
    if (root.left == null && root.right == null) return;
    if (path.length && path[path.length - 1] == q) return;

    path.push(root)
    root.left && findPath(root.left, q, path)
    root.right && findPath(root.right, q, path)
    if (path.length && path[path.length - 1] != q) path.pop()
}

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    if (!root) return null;
    if (!q || !p) return null;

    let stack1: TreeNode[] = []
    let stack2: TreeNode[] = []

    findPath(root, p, stack1)
    findPath(root, q, stack2)

    let n: TreeNode | null = stack1[0]

    while(stack1.length && stack2.length) {
        let x = stack1.shift()!;
        let y = stack2.shift()!;
        if(x === y) {
            n = x
        } else {
            break
        }
    }

    return n
}

function findNode(root: TreeNode | null, target: number): TreeNode | null {
    if (!root) return null;
    if (root.val === target) return root;
    return findNode(root.left, target) ?? findNode(root.right, target);
}

let root = buildTree([3,5,1,6,2,0,8,null,null,7,4])
let p = findNode(root , 5)
let q = findNode(root , 4)

lowestCommonAncestor(root, q, p)