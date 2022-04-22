function like() {
	this.isLiked = !this.isLiked;
}

function createSong(title, artist, releaseYear) {
	const newSong = {
		title,
		artist,
		releaseYear,
		isLiked: false,
		like: like,
		getSongInfo: getSongInfo
	};

	return newSong;
}

function getSongInfo() {
	return `${this.artist} - ${this.title} (${this.releaseYear})`;
}