function binarySearch(arr, value) {
    let start = 0
    let end = arr.length - 1

    while (start <= end) {
        let middle = Math.floor(start + (end - start) / 2);
        if (arr[middle] === value)
            return middle;
        else if (arr[middle] < value)
            start = middle + 1
        else if (arr[middle] > value)
            end = middle - 1
    }
    return undefined
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(binarySearch(arr, 10))