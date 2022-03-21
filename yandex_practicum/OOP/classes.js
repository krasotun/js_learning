class PodcastEpisode {
	constructor(title, artist, guest, duration) {
		this.title = title;
		this.artist = artist;
		this.guest = guest;
		this.isLiked = false;
	}
	like() {
		this.isliked = !this.isLiked;
	}
	getFormattedDuration() {
		const minutes = Math.floor(this.duration / 60); // целое количество минут
		const seconds = this.duration % 60; // остаток от деления на 60
		return `${minutes}:${seconds > 9 ? seconds : '0' + seconds}`;
	}
	getEpisodeInfo() {
		return `${this.artist}. "${this.title}" - ${this.guest}${this.getFormattedDuration()}`;
	}
}

console.log(PodcastEpisode);

/* Пора описать метод getEpisodeInfo класса PodcastEpisode.Пусть он возвращает описание в формате
 Автор подкаста.
"Название эпизода" - Имя гостя(00 сек.). */