export class BinaryTreeNode {
    constructor(key, value = key, parent = null) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

export class BinaryTree {
    constructor(value) {
        this.root = new BinaryTreeNode(value);
    }

    insertNode(node = this.root, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null)
                node.left = newNode;
            else
                this.insertNode(node.left, newNode);
        } else {
            if (node.right === null)
                node.right = newNode;
            else
                this.insertNode(node.right, newNode);
        }
    }
}