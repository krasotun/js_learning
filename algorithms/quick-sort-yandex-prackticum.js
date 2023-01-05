// Принимаем на вход массив arr и индексы начала и конца участка start и end, который нужно отсортировать.
// При первом запуске они будут 0 и  arr.length - 1.
// Если end ≤ start, выходим из алгоритма и возвращаем входной массив.Сортировать нечего.

// Нужно выбрать опорный элемент и переставить элементы в массиве.
// Элементы меньшие или равные опорному окажутся слева, большие — справа.Пройдём по шагам:
// 3.1 Выбираем опорный элемент как последний элемент на участке pivotValue = arr[end].Выставляем pivotIndex = start.
// 3.2 В цикле от start до end, где текущий индекс будет i, сравниваем arr[i] с pivotValue. 
// 3.3 Если arr[i] < pivotValue, меняем местами значения с индексами i и pivotIndex, увеличиваем pivotIndex на единицу.
// 3.4 После окончания цикла меняем местами значения в  pivotIndex и end, возвращаем pivotIndex.

function partition(arr, start = 0, end = arr.length - 1) {
	const pivotValue = ...;

	let pivotIndex = ...;

	for (...) {
		if (...) {
			...
		}
	}

	swap(...);

	return pivotIndex;
}

function swap(arr, i, j) {
	const tmp = arr[i];
	arr[i] = arr[j];
	arr[j] = tmp;
}