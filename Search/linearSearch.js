function linearSearch(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value)
            return i
    }
    return undefined;
}

const arr = [1, 2, 3, 4, 6]
console.log(linearSearch(arr, 5))