// import meowSound from '../audio/boost.mp3'
import meowSound from '../audio/4talk.mp3'

let audio = null;

const getAudioInstance = () => {
  if (!audio) {
    audio = new Audio();
    audio.preload = 'auto';
  }
  return audio;
};

const playSadCatClick = () => {
  const audio = getAudioInstance();
  if (audio.paused || audio.ended) {
    audio.src = meowSound;
    audio.play().catch(error => {
      console.error('Error playing audio:', error);
    });
  } else {
    audio.onended = () => {
      audio.src = meowSound;
      audio.play().catch(error => {
        console.error('Error playing audio:', error);
      });
      audio.onended = null; // Remove the event listener after playback
    };
  }
};

function toggleMuteAllSounds() {
  const audio = getAudioInstance();
  audio.muted = !audio.muted;
}

export { playSadCatClick, toggleMuteAllSounds }

