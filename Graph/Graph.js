const treeify = require('treeify')

class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList.has(vertex1))
            this.adjacencyList.set(vertex1, new Set())

        if (!this.adjacencyList.has(vertex2))
            this.adjacencyList.set(vertex2, new Set());

        this.adjacencyList.get(vertex1).add(vertex2)
        this.adjacencyList.get(vertex2).add(vertex1)
    }

    bfs(startNode) {
        let visited = {}
        let queue = []
        visited[startNode] = true
        queue.push(startNode)

        while (queue.length !== 0) {
            let getQueueElement = queue.shift()
            console.log(getQueueElement);
            let getList = this.adjacencyList.get(getQueueElement)
            getList.forEach(neigh => {
                if (!visited[neigh]) {
                    visited[neigh] = true
                    queue.push(neigh)
                }
            });
        }
    }

    dfs(startNode, visited = {}) {
        visited[startNode] = true
        console.log(startNode);

        let getQueueElement = this.adjacencyList.get(startNode)
        getQueueElement.forEach(neigh => {
            if (!visited[neigh])
                this.dfs(neigh, visited)
        })
    }

    isCyclic() {
        const visited = {}
        for (const vertex of this.adjacencyList.keys()) {
            if (!visited[vertex]) {
                if (this.isCyclicHelper(vertex, visited, null))
                    return true
            }
        }
        return false
    }

    isCyclicHelper(vertex, visited, parent) {
        visited[vertex] = true
        const neighbours = this.adjacencyList.get(vertex)
        for (const neigh of neighbours) {
            if (!visited[neigh]) {
                if (this.isCyclicHelper(neigh, visited, vertex))
                    return true
            } else if (neigh !== parent) {
                return true
            }
        }
        return false
    }

    findCycle() {
        const visited = new Set()
        for (const vertex of this.adjacencyList.keys()) {
            if (!visited.has(vertex)) {
                let cycle = this.findCycleHelper(vertex, visited, null)
                if (cycle.length > 0)
                    return cycle
            }
        }
        return []
    }

    findCycleHelper(vertex, visited, parent) {
        visited.add(vertex)

        let neighbours = this.adjacencyList.get(vertex)
        for (const neigh of neighbours) {
            if (!visited.has(neigh)) {
                let cycle = this.findCycleHelper(neigh, visited, vertex)
                if (cycle.length > 0)
                    return [vertex, ...cycle]
            } else if (neigh !== parent) {
                return [vertex, neigh]
            }
        }
        return []
    }
}

const graph = new Graph()

graph.addEdge("C", "A")
graph.addEdge("A", "E")
graph.addEdge("B", "C");
graph.addEdge("D", "E")
graph.addEdge("E", "F")
graph.addEdge("E", "C")

console.log("BFS");
graph.bfs("A")

console.log("DFS");
graph.dfs("A")

console.log(graph.isCyclic());

console.log(graph.findCycle());

console.log(treeify.asTree(graph, true));