import {buildTree, TreeNode, printLevels} from "../TreeNode.ts";

function deleteNode2(root: TreeNode | null, key: number): TreeNode | null {
    if (!root) return null;

    let parent: TreeNode | null = null;
    let cur: TreeNode | null = root

    while (true) {
        if (!cur) return root;
        if (cur.val === key) {
            if (!cur.right || !cur.left) {
                if (!parent) return cur.left ?? cur.right ?? null;
                if (parent.val < key){
                    parent.right = cur.right ?? cur.left ?? null;
                } else {
                    parent.left = cur.right ?? cur.left ?? null;
                }
                return root
            } else {
                let tmpRoot: TreeNode = cur.right
                let injRoot = cur.left
                while(tmpRoot && tmpRoot.left) {
                    tmpRoot = tmpRoot.left
                }
                tmpRoot.left = injRoot

                if(!parent) {
                    return cur.right
                }
                if (parent.val < key){
                    parent.right = cur.right
                } else {
                    parent.left = cur.right
                }
                return root
            }
        }
        if (cur.val < key) {
            parent = cur;
            cur = cur.right
        } else if (cur.val > key) {
            parent = cur;
            cur = cur.left
        }
    }
}

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
    if (!root) return null

    if (key < root.val) {
        root.left = deleteNode(root.left, key)
        return root
    }

    if (key > root.val) {
        root.right = deleteNode(root.right, key)
        return root
    }

    if (!root.left) return root.right
    if (!root.right) return root.left

    let target = root.right
    while (target.left) {
        target = target.left
    }

    root.val = target.val
    root.right = deleteNode(root.right, target.val)

    return root
}

printLevels(deleteNode(buildTree([5,3,6,2,4,null,7]), 7))
printLevels(deleteNode(buildTree([5,3,6,2,4,null,7]), 3))
