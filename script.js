const carousel = document.getElementById("carousel");
const images = carousel.getElementsByTagName("img");
let angle = 0;
const total = images.length;

function setupImages() {
  for (let i = 0; i < total; i++) {
    let theta = (360 / total) * i;
    images[i].style.transform = `rotateY(${theta}deg) translateZ(500px)`;
  }
}

function rotate(direction) {
  angle += (360 / total) * direction;
  carousel.style.transform = `rotateY(${angle}deg)`;
}

setupImages();
