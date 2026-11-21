export class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}


export function buildTree(values: (number | null)[]): TreeNode | null {
    if (!values.length || values[0] === null) return null;
    const root = new TreeNode(values[0]);
    const queue: TreeNode[] = [root];
    let i = 1;
    while (queue.length && i < values.length) {
        const node = queue.shift()!;
        if (i < values.length && values[i] !== null) {
            node.left = new TreeNode(values[i]!);
            queue.push(node.left);
        }
        i++;
        if (i < values.length && values[i] !== null) {
            node.right = new TreeNode(values[i]!);
            queue.push(node.right);
        }
        i++;
    }
    return root;
}

export class BST {
    root: TreeNode | null = null;

    insert(val: number): void {
        const node = new TreeNode(val);

        if (!this.root) {
            this.root = node;
            return;
        }

        let curr = this.root;
        while (true) {
            if (val < curr.val) {
                if (!curr.left) {
                    curr.left = node;
                    return;
                }
                curr = curr.left;
            } else {
                if (!curr.right) {
                    curr.right = node;
                    return;
                }
                curr = curr.right;
            }
        }
    }

    private height(node: TreeNode | null): number {
        if (!node) return 0;
        return 1 + Math.max(this.height(node.left), this.height(node.right));
    }

    private cellWidth(node: TreeNode | null): number {
        if (!node) return 0;
        return Math.max(
            String(node.val).length,
            this.cellWidth(node.left),
            this.cellWidth(node.right)
        );
    }

    printLevels(): void {
        if (!this.root) return;

        const height = this.height(this.root);
        const width = this.cellWidth(this.root) + 1; // +1 keeps neighbours apart

        let level: (TreeNode | null)[] = [this.root];

        for (let depth = 0; depth < height; depth++) {
            const leading = 2 ** (height - depth - 1) - 1;
            const between = 2 ** (height - depth) - 1;

            const cells = level.map((node) =>
                (node ? String(node.val) : "").padStart(width)
            );

            const indent = " ".repeat(leading * width);
            const gap = " ".repeat(between * width);
            console.log((indent + cells.join(gap)).trimEnd());

            const next: (TreeNode | null)[] = [];
            for (const node of level) {
                next.push(node?.left ?? null, node?.right ?? null);
            }
            level = next;
        }
    }
}

function treeHeight(node: TreeNode | null): number {
    if (!node) return 0;
    return 1 + Math.max(treeHeight(node.left), treeHeight(node.right));
}

function maxCellWidth(node: TreeNode | null): number {
    if (!node) return 0;
    return Math.max(
        String(node.val).length,
        maxCellWidth(node.left),
        maxCellWidth(node.right)
    );
}

export function printLevels(root: TreeNode | null): void {
    if (!root) return;

    const height = treeHeight(root);
    const width = maxCellWidth(root) + 1; // +1 keeps neighbours apart

    let level: (TreeNode | null)[] = [root];

    for (let depth = 0; depth < height; depth++) {
        const leading = 2 ** (height - depth - 1) - 1;
        const between = 2 ** (height - depth) - 1;

        const cells = level.map((node) =>
            (node ? String(node.val) : "").padStart(width)
        );

        const indent = " ".repeat(leading * width);
        const gap = " ".repeat(between * width);
        console.log((indent + cells.join(gap)).trimEnd());

        const next: (TreeNode | null)[] = [];
        for (const node of level) {
            next.push(node?.left ?? null, node?.right ?? null);
        }
        level = next;
    }
}