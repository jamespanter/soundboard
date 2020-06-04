const soundboardContainer = document.getElementById("soundboard-container");

const items = [
  {
    title: "BIRD1",
    imageFileName: "bird1.png",
    soundFileName: "bird1.wav",
  },
  {
    title: "BIRD2",
    imageFileName: "bird2.png",
    soundFileName: "bird2.wav",
  },
  {
    title: "BIRD3",
    imageFileName: "bird3.png",
    soundFileName: "bird3.wav",
  },
  {
    title: "BIRD4",
    imageFileName: "bird4.png",
    soundFileName: "bird4.wav",
  },
];

const mapSoundboardItems = () => {
  soundboardContainer.innerHTML = items
    .map((item) => {
      return `<div class="card" id=${item.title}>
      <img src=../assets/${item.imageFileName} class="slide-in-left delay1">
      <div class="card-text" class="slide-in-left">
      <h2 class="slide-in-left delay2" >${item.title}</h2>
      <button onclick=playSound("${item.soundFileName}") class="slide-in-left delay3">PLAY</button> 
      </div></div>`;
    })
    .join("");
};

const playSound = (soundFileName) => {
  const audio = new Audio(`../assets/${soundFileName}`);
  audio.play();
};
