const soundboardContainer = document.getElementById("soundboard-container");

const items = [
  {
    title: "BIRD 1",
    imageFileName: "bird1.png",
    soundFileName: "bird1.wav",
  },
  {
    title: "BIRD 1",
    imageFileName: "bird2.png",
    soundFileName: "bird2.wav",
  },
  {
    title: "BIRD 1",
    imageFileName: "bird3.png",
    soundFileName: "bird3.wav",
  },
  {
    title: "BIRD 1",
    imageFileName: "bird4.png",
    soundFileName: "bird4.wav",
  },
];

const mapSoundboardItems = () => {
  soundboardContainer.innerHTML = items
    .map((item) => {
      return `<div class="card" id=${item.title}>
      <img src=../assets/${item.imageFileName}>
      <div class="card-text">
      <h2>${item.title}</h2>
      <button onclick=playSound("${item.soundFileName}")>PLAY</button> 
      </div></div>`;
    })
    .join("");
};

const playSound = (soundFileName) => {
  const audio = new Audio(`../assets/${soundFileName}`);
  audio.play();
};
