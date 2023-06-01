import Insert from './Insert.mjs';

export default class DFS extends Insert {
    preOrder(root = this.root) {
        if (root === null)
            return null
        else {
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root = this.root) {
        if (root === null)
            return null
        else {
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
        }
    }

    postOrder(root = this.root) {
        if (root === null)
            return null
        else {
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
        }
    }
}
// const dfs = new DFS()
// dfs.insert(100)
// dfs.insert(85)
// dfs.insert(122)
// dfs.insert(115)
// dfs.insert(130)
// dfs.insert(88)
// dfs.insert(92)
// console.log("PreOrder");
// dfs.preOrder()
// console.log("inOrder");
// dfs.inOrder()
// console.log("PostOrder");
// dfs.postOrder()
