// Запишем алгоритм сортировки вставками, где arr — входной массив, n — его длина:
// Идём по массиву от 1 до n.Текущий индекс будет i.
// Ищем индекс вставки элемента insertionIndex:
// 2.1 Выставляем insertionIndex = 0 по умолчанию.
// 2.2 Идём по массиву от i - 1 до 0. Текущий индекс будет j.
// 2.3 Если arr[j] < arr[i], то insertionIndex = j + 1. Выходим из цикла.
// Сдвигаем все элементы с insertionIndex до i - 1 включительно на одну позицию вперёд, а элемент с индексом i помещаем в insertionIndex.

// Напишите функцию findInsertionIndex(arr, i), которая будет находить индекс для вставки элемента.
// Убедитесь, что она работает: возьмите массив и проверьте, что функция находит правильное место для каждого элемента.

// Напишите функцию shiftElements(arr, insertionIndex, i), которая будет сдвигать значения от insertionIndex до i - 1 включительно на одну позицию вперёд,
// а значение в индексе i помещать в индекс insertionIndex.Убедитесь, что она работает.Сдвиг удобнее делать обратным циклом от i до insertionIndex.

// Совместите две функции внутри основного цикла по массиву.
// Находите с помощью findInsertionIndex индекс для вставки и передавайте его в shiftElements как начальную точку сдвига.

function insertionSort(arr) {
	for (...) {
		...
	}

	return arr;
}

function findInsertionIndex(arr, i) {
	for (...) {
		if (...) {
			return ...;
		}
	}

	return 0;
}

function shiftElements(arr, insertionIndex, i) {
	const value = arr[i];

	for (...) {
		...
	}

	arr[insertionIndex] = value;
}