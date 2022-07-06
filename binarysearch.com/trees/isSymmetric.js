class Solution {
    solve(root) {
        if(!root){
            return true
        }

        return this.dfs(root.left, root.right)
    }

    dfs(left, right){
        if(!left && !right){
            return true
        }

        if(left && right){
            const lEr = this.dfs(left.left, right.right)
            const rEl = this.dfs(left.right, right.left)
            return (left.val===right.val) &&  lEr && rEl
        }
        return false
    }
}