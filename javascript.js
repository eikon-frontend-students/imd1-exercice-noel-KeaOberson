const Image = document.querySelector("img");
Image.addEventListener("mouseenter", function () {
  Image.src = "twerk.png";
});

Image.addEventListener("mouseleave", function () {
  Image.src = "normal.png";
});

const audioElement = document.querySelector("#audio");
const hoverZone = document.querySelector("img");

hoverZone.addEventListener("mouseenter", function () {
  if (!audioElement.paused) {
    audioElement.currentTime = 0;
  }
  audioElement.play();
});

hoverZone.addEventListener("mouseleave", function () {
  audioElement.pause();
});
