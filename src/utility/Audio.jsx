import sadCatIdle from '../audio/1idle.mp3'
import sadCatClick from '../audio/1talk.mp3'

const audio = new Audio();
audio.preload = 'auto'; // Preload audio for better responsiveness

const playSadCatClick = () => {
  audio.src = sadCatClick;
  audio.play();
};

const playSadCatIdle = () => {
  audio.src = sadCatIdle;
  audio.play();
};

function toggleMuteAllSounds() {
  audio.muted = !audio.muted;
}

export { playSadCatClick, playSadCatIdle, toggleMuteAllSounds }

