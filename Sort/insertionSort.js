function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i]
        let j = i - 1
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]
            j--;
        }
        arr[j + 1] = key
    }
    console.log(arr);
}

const arr = [8, 3, 9, 6, 7, 8, 2, 5, 4]
insertionSort(arr)