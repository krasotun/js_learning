function counter() {
	if (!counter.times) {
		counter.times = 0;
	}
	counter.times += 1;
	return counter.times
}

counter(); // 1
counter(); // 2
counter(); // 3
counter(); // 4
counter(); // 5