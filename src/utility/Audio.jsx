import sadCatIdleSound from '../audio/1idle.mp3'
import sadCatClickSound from '../audio/1talk.mp3'

const audio = new Audio();
audio.preload = 'auto'; // Preload audio for better responsiveness

const playSadCatClick = () => {
  audio.src = sadCatClickSound;
  audio.play();
};

const playSadCatIdle = () => {
  audio.src = sadCatIdleSound;
  audio.play();
};

function toggleMuteAllSounds() {
  audio.muted = !audio.muted;
}

export { playSadCatClick, playSadCatIdle, toggleMuteAllSounds }

