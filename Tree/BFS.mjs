import Insert from "./Insert.mjs";

class BFS extends Insert {
    bfs() {
        let queue = []
        queue.push(this.root)
        while (queue.length !== 0) {
            let currentNode = queue.shift()
            console.log(currentNode.value);
            if (currentNode.left)
                queue.push(currentNode.left)
            if (currentNode.right)
                queue.push(currentNode.right)
        }
    }
}

const bfs = new BFS()
bfs.insert(100)
bfs.insert(85)
bfs.insert(122)
bfs.insert(115)
bfs.insert(130)
bfs.insert(88)
bfs.insert(92)
bfs.bfs()