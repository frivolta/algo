function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}



const findSecondMinimumValue = function(root) {
    let k = 2
    let minVal = -1
    const values = dfs(root, []).sort((a,b)=>a-b)
    for(const value of values){
        if(minVal===-1){
            minVal = value
            k-=1
        }else if(value>minVal && k>0){
            minVal = value
            k-=1
        }
    }
    console.log(k, minVal)
    return k === 0 ? minVal : -1
};

const dfs = (node, list)=>{
    if(node){
        dfs(node.left, list)
        list.push(node.val)
        dfs(node.right, list)
    }
    return list
}

const tree = new TreeNode(2, new TreeNode(2), new TreeNode(5, new TreeNode(5), new TreeNode(7)))
console.log(findSecondMinimumValue(tree))