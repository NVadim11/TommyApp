// https://commondatastorage.googleapis.com/codeskulptor-assets/Collision8-Bit.ogg
// '../meow.mp3'
const audio = new Audio('https://commondatastorage.googleapis.com/codeskulptor-assets/Collision8-Bit.ogg');
const soundPlay = () => {	
	audio.play();
};

function toggleMuteAllSounds() {
audio.muted = !audio.muted;
}

export { soundPlay, toggleMuteAllSounds }

