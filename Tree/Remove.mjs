import Insert from "./Insert.mjs";

class Remove extends Insert {
    remove(value) {
        this.root = this.removeHelper(this.root, value)
    }

    removeHelper(root, value) {
        if (root === null)
            return null
        if (value < root.value)
            root.left = this.removeHelper(root.left, value)
        else if (value > root.value)
            root.right = this.removeHelper(root.right, value)
        else {
            if (!root.left && root.right)
                return null
            if (!root.left)
                return root.right
            if (!root.right)
                return root.left
            root.value = this.min(root.right)
            root.right = this.removeHelper(root.right, root.value)
        }
        return root
    }

    min(node = this.root) {
        if (node.left === null)
            return node.value
        else
            return this.min(node.left)
    }
}

const remove = new Remove()
remove.insert(100)
remove.insert(85)
remove.insert(122)
remove.insert(115)
remove.insert(130)
remove.insert(88)
remove.insert(92)
remove.remove(115)
