function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let min = i
        for (let j = i + 1; j < arr.length; j++)
            if (arr[j] < arr[min])
                min = j
        let temp = arr[i]
        arr[i] = arr[min]
        arr[min] = temp
    }
    console.log(arr);
}

const arr = [7, 4, 8, 3, 8, 9, 3, 2, 7]
selectionSort(arr)