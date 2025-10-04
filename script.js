let currentAudioElement = null;

function playSound(name) {
  // stop previous audio if playing
  if (currentAudioElement) {
    currentAudioElement.pause();
    currentAudioElement.currentTime = 0;
    currentAudioElement.remove();
    currentAudioElement = null;
  }

  // create new audio element and attach to DOM
  currentAudioElement = document.createElement('audio');
  currentAudioElement.src = `sounds/${name}.mp3`;
  currentAudioElement.autoplay = true; // start playing immediately
  currentAudioElement.id = 'current-audio'; // optional, for easier debugging
  document.body.appendChild(currentAudioElement);
}

function stopSound() {
  if (currentAudioElement) {
    currentAudioElement.pause();
    currentAudioElement.currentTime = 0;
    currentAudioElement.remove();
    currentAudioElement = null;
  }
}
