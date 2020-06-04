const soundboardContainer = document.getElementById("soundboard-container");

const items = [
  {
    title: "bird1",
    imageFileName: "bird1",
    soundFileName: "bird1",
  },
  {
    title: "bird2",
    imageFileName: "bird2",
    soundFileName: "bird2",
  },
  {
    title: "bird3",
    imageFileName: "bird3",
    soundFileName: "bird3",
  },
  {
    title: "bird4",
    imageFileName: "bird4",
    soundFileName: "bird4",
  },
];

const mapSoundboardItems = () => {
  soundboardContainer.innerHTML = items
    .map((item) => {
      return `<div class="card" id=${item.title}>
      <img src=../assets/${item.title}.png>
      <div class="card-text">
      <h2>${item.title}</h2>
      <button onclick=playSound("${item.soundFileName}.wav")>Play</button> 
      </div></div>`;
    })
    .join("");
};

const playSound = (soundFileName) => {
  const audio = new Audio(`../assets/${soundFileName}`);
  audio.play();
};
