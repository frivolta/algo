class Solution {
    max = -Infinity
    solve(root) {
        this.dfs(root)
        return this.max
    }
    dfs(node){
        if(node===null){
            return 0
        }
        const left = Math.max(this.dfs(node.left),0)
        const right = Math.max(this.dfs(node.right),0)
        this.max = Math.max(this.max, node.val+left+right)
        return Math.max(left, right)+node.val
    }
}