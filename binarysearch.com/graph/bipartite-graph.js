class Solution {
    adj = {}
    solve(graph) {
        return this.dfs(graph, 0, {})
    }

    // Check if the edges of the node are already colored with the same color
    isPossible(graph, node, color, coloredNodes){
        const edges = graph[node]
        for(const edge of edges){
            if(edge in coloredNodes && coloredNodes[edge]===color){
                return false
            }
        }
        return true
    }
    dfs(graph, currentNode, coloredNodes = {}){
        // Max number of colors I need to use in a bipartite graph
        const COLORS = [1,2]
        // Eg, has 3 nodes and I reached 4 so return true, I am at the end
        const N = graph.length
        if(currentNode === N) return true
        // For every color I check if it possible to use that color
        for(const color of COLORS){
            if(this.isPossible(graph, currentNode, color, coloredNodes)){
                // If is possible I add the node to the coloredNodes map with the possible color
                coloredNodes[currentNode]=color
                // I check the next node backtracking
                if(this.dfs(graph, currentNode+1, coloredNodes)) return true
                // If I don't return I will use 0 as default color so I try with another one
                coloredNodes[currentNode]=0
            }
        }
        // If the loop did'nt result I return false
        return false
    }
}