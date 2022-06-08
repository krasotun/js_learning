form.addEventListener('submit', function submit(e) {
	e.preventDefault();
	renderLoading(true);
	search(form.elements.entity.value, form.elements.entityId.value)
		.then((res) => {
			if (res.ok) {
				return res.json();
			}
			return Promise.reject(res.status);
		})
		.then((res) => {
			renderResult(res.name);
		})
		.catch((err) => {
			renderError(`Ошибка ${err}`);
		})
		.finally(() => {
			renderLoading(false);
		})
};

