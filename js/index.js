const video = document.getElementById("video");
const playBtn = document.querySelector(".play-button");
const pauseBtn = document.querySelector(".pause-button");

function playVideo() {
  video.play();
  playBtn.style.display = "none";
  pauseBtn.style.display = "flex";
}

function pauseVideo() {
  video.pause();
  pauseBtn.style.display = "none";
  playBtn.style.display = "flex";
}


  document.querySelectorAll('.footer-toggle').forEach(el =>
    el.onclick = () => el.parentElement.classList.toggle('active')
  );

