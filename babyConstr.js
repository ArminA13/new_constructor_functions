// Baby Constructor
// Write a Baby constructor method Person.
// Besides name and age, Baby takes a third argument to initialize favoriteToy.
// Besides the methods on Person.prototype, babies have the ability to .play():
// Should return a string "Playing with x", x being the favorite toy.
// Playlist
// Add: Pushes the passed-through song to the songs array
// Play: Plays current song based on array index
// Stop: Holds place in array, but calls above stop song prototype function
// Next: Sets the next song in the songs array, calling the above play prototype function
// Song should take in two arguments, title and artist, which should both be added as properties when
// the Song constructor function is used.
// Play: Sets the song as playing using isPlaying
// Stop: Sets the song as not playing (isPlaying = false)

function Baby(name, age, favoriteToy) {
    this.name = name;
    this.age = age;
    this.favoriteToy = favoriteToy;
}

Baby.prototype.play = function () {
    return `Playing with ${this.favoriteToy}`;
};

function Song(title, artist) {
    this.title = title;
    this.artist = artist;
    this.isPlaying = false;
}

Song.prototype.play = function () {
    this.isPlaying = true;
    return `${this.title} started`;
};

Song.prototype.stop = function () {
    this.isPlaying = false;
    return `${this.title} stopped`;
};

function Playlist() {
    this.songs = [];
    this.songIndex = 0;
}

Playlist.prototype.add = function (song) {
    this.songs.push(song);
};

Playlist.prototype.play = function () {
    let currentSong = this.songs[this.songIndex];
    return currentSong.play();
};

Playlist.prototype.stop = function () {
    let currentSong = this.songs[this.songIndex];
    return currentSong.stop();
};

Playlist.prototype.next = function () {
    let currentSong = this.songs[this.songIndex];
    this.songIndex = (this.songIndex + 1) % this.songs.length;
    return `${currentSong.stop()}, ${this.play()}`;
};

const playlist = new Playlist();
const heyJude = new Song("Hey Jude", "The Beatles");
const jaded = new Song("Jaded", "Aerosmith");

playlist.add(heyJude);
playlist.add(jaded);

console.log(playlist.play()); // Hey Jude started
console.log(playlist.next()); // Hey Jude stopped, Jaded started
console.log(playlist.next()); // Jaded stopped, Hey Jude started
console.log(playlist.stop()); // Hey Jude stopped
console.log(playlist.play()); // Hey Jude started
