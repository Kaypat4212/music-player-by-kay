const audio = document.getElementById("audio");
const playPauseButton = document.getElementById("play-pause");
const progressBar = document.getElementById("progress");

playPauseButton.addEventListener("click", togglePlayPause);
audio.addEventListener("timeupdate", updateProgressBar);


function togglePlayPause() {
    if (audio.paused){
        audio.play();
        playPauseButton. textContent = "Pause";

    } else{
        audio.pause();
        playPauseButton. textContent = "Play"
    }
}


function updateProgressBar() {
    const percent = (audio.currentTime / audio.duration) * 100;
    progressBar.value = percent;
    
    const duration = audio.duration;
const time = audio.currentTime;

document.getElementById("duration").textContent = formatTime(duration);
document.getElementById("time").textContent = formatTime(time);


}


function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
  
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  }
  