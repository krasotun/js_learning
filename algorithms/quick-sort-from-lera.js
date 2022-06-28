function sort(arr) {
    if (Array.isArray(arr) !== true) return undefined;
    if (arr.length <= 1) return arr;
    const left = [];
    const right = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[0])
            left.push(arr[i])
        else
            right.push(arr[i]);
    }
    return [...sort(left), arr[0], ...sort(right)];
}


const arr = [135, 135, 145, 3, 5, 1, 20, 22, 3, 3, 4, 2, 100, 110, 0];
console.log(sort(arr));
console.log(sort([2]));
console.log(sort([]));