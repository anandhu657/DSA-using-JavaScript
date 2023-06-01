import Insert from './Insert.mjs';

class Search extends Insert {
    search(value, root=this.root) {
        if (!root)
            return false
        if (value < root.value)
            return this.search(value, root.left)
        else if (value > root.value)
            return this.search(value, root.right)
        else
            return true
    }
}

const search = new Search();
search.insert(100)
search.insert(85)
search.insert(122)
search.insert(115)
search.insert(130)
search.insert(88)
search.insert(92)
console.log(search.search(130));