function flattenBinaryTree(tree, cb) {
    const traversal =  recursiveInOrder(tree,[])
    for(let i=0; i<traversal.length;i++){
        if(i>0) {
            traversal[i].left = traversal[i - 1]
        } else{
            traversal[i].left = null
        }
        if(i<traversal.length-1){
            traversal[i].right = traversal[i+1]
        }else{
            traversal[i].right = null
        }
    }
    return traversal[0]
}




// Recursive in order traversal
const recursiveInOrder = (node, values = []) => {
    if (!node) {
        return null
    }
    recursiveInOrder(node.left, values)
    values.push(node)
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

console.log(flattenBinaryTree(tree))