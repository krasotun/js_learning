class AudioItem {
	constructor(title, artist) {
		this._title = title;
		this._artist = artist;
	}
	like() {
		this.isLiked = !this.isLiked;
	}
}

class Song extends AudioItem {
	constructor(title, artist, releaseYear) {
		super(title, artist);
		this._releaseYear = releaseYear;
		this.isLiked = false;
	}

	like() {
		this.isLiked = !this.isLiked;
	}

	getSongInfo() {
		return `${this._artist} - ${this._title} (${this._releaseYear})`
	}
}

class PodcastEpisode extends AudioItem {
	constructor(title, artist, guest, duration) {
		super(title, artist);
		this._guest = guest;
		this._duration = duration;
		this.isLiked = false;
	}

	like() {
		this.isLiked = !this.isLiked;
	}

	getEpisodeInfo() {
		return `${this._artist}. "${this._title}" - ${this._guest} (${this._getFormattedDuration()} сек.)`;
	}

	_getFormattedDuration() {
		const minutes = Math.floor(this._duration / 60); // целое количество минут
		const seconds = this._duration % 60; // остаток от деления на 60
		return `${minutes}:${seconds > 9 ?  seconds : '0' + seconds}`;
	}
}