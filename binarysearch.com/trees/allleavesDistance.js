class Tree {
    constructor(val, left = null, right = null) {
        this.val = val
        this.left = left
        this.right = right
    }
}

class Solution {
    level = 0
    solve(root) {
        return this.dfs(root, 1)
    }
    dfs(node,distance){
        if(!node){
            return true
        }
        if(!node.left && !node.right){
            if(this.level===0){
                this.level =distance
                return true
            }
            return distance === this.level
        }
        return this.dfs(node.left, distance+1) && this.dfs(node.right, distance+1)
    }
}


const tree = new Tree(3, new Tree(4, null, new Tree(2)), new Tree(1, new Tree(0)))
const solution = new Solution()
console.log(solution.solve(tree))