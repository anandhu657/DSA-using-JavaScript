function binarySearch(arr, target, start, end) {
    if (start <= end) {
        let middle = Math.floor(start + (end - start / 2));
        if (arr[middle] === target)
            return middle;
        else if (arr[middle] > target)
            return binarySearch(arr, target, start, middle - 1)
        else if (arr[middle] < target)
            return binarySearch(arr, target, middle + 1, end)
    }
    return undefined
}

const arr = [1, 2, 3, 4, 5, 6]
console.log(binarySearch(arr, 10, 0, arr.length - 1));