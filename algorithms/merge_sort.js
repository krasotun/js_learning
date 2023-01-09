
// 6.1 Копируем значения из arr на отрезке от start до end в buffer.Сделав массив buffer в самом начале сортировки,
// мы сэкономили память.В противном случае, чтобы совместить два результата, на каждом шаге потребовалось
// бы создать две дополнительные копии arr на участках от start до mid и от mid + 1 до end.  
// 6.2 Создаём: две переменные, чтобы отследить индексом левую и правую части — l = start и r = mid + 1;
// переменную, чтобы отследить текущую позицию — i = start. 
// 6.3 Пока l < mid + 1 и r < end + 1, сравниваем значения buffer[l] и buffer[r].
// 6.3.1 Если buffer[l] <= buffer[r], присваиваем arr[i] значение buffer[l], инкрементируем l и i.
// 6.3.2 В противном случае присваиваем arr[i] значение buffer[r], инкрементируем r и i.
// 6.4 Пока l < mid + 1, присваиваем arr[i] значение buffer[l], инкрементируем l и i.
// 6.5 Пока r < end + 1, присваиваем arr[i] значение buffer[r], инкрементируем r и i

function merge(arr, buffer, start, mid, end) {
	// см. 6.1
	for (let i = start; i <= end; i++) {
		buffer.push(arr[i]);
	}

	// см. 6.2
	let l = start;
	let r = mid + 1;
	let i = start;

	// см. 6.3
	while (l < mid + 1 && r < end + 1) {
		if (buffer[l] <= buffer[r]) {
			arr[i] = buffer[l]
			l++
		} else {
			arr[i] = buffer[r]
			r++
		}
		i++;
	}

	// см. 6.4
	while (l < mid + 1) {
		arr[i] = buffer[l];
		l++;
		i++;
	}

	// см. 6.5
	while (r < end + 1) {
		arr[i] = buffer[r];
		r++;
		i++;
	}
}
