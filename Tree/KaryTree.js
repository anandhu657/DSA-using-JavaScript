const treeify = require('treeify')

class Node {
    constructor(value) {
        this.value = value;
        this.children = []
    }
}

class KaryTree {
    constructor() {
        this.root = null
    }

    insertNode(parentValue, value) {
        const newNode = new Node(value);

        if (!this.root) {
            this.root = newNode;
            return
        }

        const parentNode = this.findNode(parentValue)

        if (!parentNode)
            return

        parentNode.children.push(newNode)
    }

    findNode(parentValue, node = this.root) {
        if (!node) {
            return null
        }

        if (parentValue === node.value) {
            return node
        }

        for (let child of node.children) {
            let foundNode = this.findNode(parentValue, child)
            if (foundNode)
                return foundNode
        }
        return null
    }

    traversal() {
        let queue = []
        let result = []

        if (!this.root)
            return result

        queue.push(this.root)

        while (queue.length > 0) {
            let node = queue.shift()
            result.push(node.value)

            for (let child of node.children)
                queue.push(child)
        }

        return result
    }
}

const tree = new KaryTree()
tree.insertNode(null, "ceo")
tree.insertNode("ceo", "mng1")
tree.insertNode("ceo", "mng2")
tree.insertNode("ceo", "mng3")
tree.insertNode("ceo", "mng4")
tree.insertNode("ceo", "mng5")
tree.insertNode("mng1", "emp1")
tree.insertNode("mng1", "emp2")
tree.insertNode("mng2", "emp1")
tree.insertNode("mng2", "emp2")
tree.insertNode("mng3", "emp1")
tree.insertNode("mng3", "emp2")
tree.insertNode("mng4", "emp1")
tree.insertNode("mng4", "emp2")
tree.insertNode("mng5", "emp1")
tree.insertNode("mng5", "emp2")
console.log(tree.traversal());

console.log(treeify.asTree(tree,true));