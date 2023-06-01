class Node {
    constructor(value) {
        this.value = value
        this.left = this.right = null
    }
}

export default class Insert {
    constructor() {
        this.root = null
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) 
            this.root = newNode
        else
            this.insertHelper(newNode, this.root)
    }

    insertHelper(newNode, root) {
        if (newNode.value < root.value) {
            if (root.left === null)
                root.left = newNode
            else
                this.insertHelper(newNode, root.left)
        } else if (newNode.value > root.value) {
            if (root.right === null)
                root.right = newNode
            else
                this.insertHelper(newNode, root.right)
        }
    }
}