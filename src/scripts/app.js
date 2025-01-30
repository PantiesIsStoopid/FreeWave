// Select elements
const playPauseBtn = document.getElementById("playPauseBtn");
const audioPlayer = document.getElementById("audioPlayer");
const volumeControl = document.getElementById("volumeControl");
const nextTrackBtn = document.getElementById("nextTrackBtn");

// Set the audio source to the file
const musicFilePath = "src/assets/noise.mp3"; // Your provided music file path

// Set the audio source to the file
audioPlayer.src = musicFilePath;
console.log("Audio Source:", audioPlayer.src); // Log the file path for debugging

// Play/Pause button functionality
playPauseBtn.addEventListener("click", () => {
  if (audioPlayer.paused) {
    audioPlayer
      .play()
      .then(() => {
        playPauseBtn.textContent = "Pause";
      })
      .catch((error) => {
        console.error("Error playing audio:", error);
      });
  } else {
    audioPlayer.pause();
    playPauseBtn.textContent = "Play";
  }
});

// Volume control functionality
volumeControl.addEventListener("input", () => {
  audioPlayer.volume = volumeControl.value / 100;
});

// Skip to next track functionality
nextTrackBtn.addEventListener("click", () => {
  // Set new music file (for next track)
  audioPlayer.src = "src/assets/next_music_file.mp3"; // Replace with next track
  audioPlayer.play();
});
