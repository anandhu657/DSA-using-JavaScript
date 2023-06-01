import Insert from "./Insert.mjs";

class BST extends Insert {
    isBST(node = this.root, min = -Infinity, max = Infinity) {
        if (!node)
            return true

        if (node.value <= min || node.value >= max)
            return false

        return (
            this.isBST(node.left, min, node.value) &&
            this.isBST(node.right, node.value, max)
        )
    }

    isComplete() {
        let queue = []
        let flag = false
        queue.push(this.root)
        while (queue.length !== 0) {
            let tempNode = queue.shift()
            if (tempNode.left != null) {
                if (flag === true)
                    return false
                queue.push(tempNode.left)
            } else {
                flag = true
            }
            if (tempNode.right != null) {
                if (flag === true)
                    return false
                queue.push(tempNode.right)
            } else {
                flag = true
            }
        }
        return true
    }

    isFull(node = this.root) {
        if (node === null)
            return true
        if (node.left === null && node.right === null)
            return true
        if ((node.left !== null) && (node.right !== null))
            return (
                this.isFull(node.left) &&
                this.isFull(node.right)
            )
        return false
    }
}

const bst = new BST()
bst.insert(100)
bst.insert(85)
bst.insert(122)
bst.insert(115)
bst.insert(130)
bst.insert(88)
bst.insert(92)
console.log(bst.isBST());
console.log(bst.isComplete())
console.log(bst.isFull())