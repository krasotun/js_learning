function binarySearch(list, element) {
  let low = 0;
  let high = list.length;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let guess = list[mid];
    if (guess === element) {
      return mid;
    } else if (guess > element) {
      high = mid - 1;
    } else if (guess < element) {
      low = mid + 1;
    } else {
      return -1;
    }
  }
}
