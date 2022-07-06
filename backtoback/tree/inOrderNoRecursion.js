function iterativeInOrderTraversal(tree, cb) {
    console.log("recursive", recursiveInOrder(tree))
    return iterativeInOrder(tree)
}


const iterativeInOrder = (node, cb) => {
    const stack = []
    const values = []
    const visited = new Set()
    let ref = node
    while (stack.length || ref) {
        while(ref){
            stack.push(ref)
            ref = ref.left
        }
        // Now is null
        ref = stack.pop()
        //Compute
        visited.add(ref)
        cb(ref)
        //Compute
        ref=ref.right
    }

    return values
}


// Recursive in order traversal
const recursiveInOrder = (node, values = []) => {
    if (!node) {
        return null
    }
    recursiveInOrder(node.left, values)
    values.push(node.value)
    recursiveInOrder(node.right, values)
    return values
}


/////////// Test scenario:
// Test scenario:
class TreeNode {
    constructor(value, left, right) {
        this.value = value;
        this.left = left || null; // Points to another TreeNode object
        this.right = right || null; // Points to another TreeNode object
    }
}

const tree = new TreeNode(1, new TreeNode(2, new TreeNode(4, null, new TreeNode(9)), null), new TreeNode(3, new TreeNode(6), new TreeNode(7)))

console.log(iterativeInOrderTraversal(tree))