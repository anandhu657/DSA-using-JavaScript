function quickSort(arr) {
    quickSortHelper(arr, 0, arr.length - 1)
    return arr
}

function quickSortHelper(arr, start, end) {
    if (start >= end) {
        return
    }

    let pivot = start
    let left = start + 1
    let right = end

    while (left <= right) {
        if (arr[left] > arr[pivot] && arr[right] < arr[pivot]) {
            swap(arr, left, right)
            left++
            right--
        }
        if (arr[left] <= arr[pivot])
            left++
        if (arr[right] >= arr[pivot])
            right--
    }
    swap(arr, right, pivot)
    quickSortHelper(arr, start, right - 1)
    quickSortHelper(arr, right + 1, end)
}

function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

const arr = [5, 4, 7, 3, 9, 3, 6, 8]
console.log(quickSort(arr));