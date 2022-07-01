class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinaryTree {
    constructor(value) {
        this.root = new BinaryTreeNode(value);
    }
    insertNode(newNode, node = this.root,) {
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

const BT = [1,5,8,7,9,44,665,4,8]

const genBinarytree = (vals=[]) => {
    const bt = new BinaryTree(0)
    bt.insertNode(new BinaryTreeNode(BT[0]))
    bt.insertNode(new BinaryTreeNode(BT[1]))
    bt.insertNode(new BinaryTreeNode(BT[2]))
    return bt
}


console.log(genBinarytree(BT))