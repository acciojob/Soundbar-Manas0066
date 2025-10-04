//your JS code here. If required.
let currentAudio = null;

function playSound(name) {
  // stop previous audio if playing
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  // create new audio
  currentAudio = new Audio(`sounds/${name}.mp3`);
  currentAudio.play();
}

function stopSound() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }
}
