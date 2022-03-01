function keyHandler(evt) {
	if (evt.key === 'Enter') {
		addSong(artistInput.value, titleInput.value);
	}
	if (evt.key.toLowerCase() === 'ё') {
		evt.preventDefault;
	}
}