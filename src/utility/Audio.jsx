import soundEffect from '../meow.mp3'
const audio = new Audio(soundEffect)
	
const soundPlay = () => {	
	audio.play();
};

function toggleMuteAllSounds() {
audio.muted = !audio.muted;
}

export { soundPlay, toggleMuteAllSounds }

