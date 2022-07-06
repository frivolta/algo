/**
 * class Tree {
 *   constructor(val, left=null, right=null) {
 *     this.val = val
 *     this.left = left
 *     this.right = right
 *   }
 * }
 */

/**
 * class LLNode {
 *   constructor(val, next=null) {
 *     this.val = val
 *     this.next = next
 *   }
 * }
 */

class Solution {
    solve(root) {
        if(!root) return null
        const order = this.dfs(root,[])
        const ll = new LLNode(order[0])
        let tmp = ll
        for(let i =1; i<order.length;i++){
            tmp.next = new LLNode(order[i])
            tmp=tmp.next
        }
        return ll
    }
    dfs(node, order){
        if(node){
            this.dfs(node.left, order)
            order.push(node.val)
            this.dfs(node.right, order)
        }
        return order
    }
}